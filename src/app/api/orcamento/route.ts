import { NextResponse } from 'next/server';
import { orcamentoSchema } from '@/lib/orcamentoSchema';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validação com Zod
    const result = orcamentoSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = result.data;
    const nome = data.nome.trim();
    const email = data.email.trim();
    const empresa = data.empresa.trim();
    const cnpj = data.cnpj ? data.cnpj.trim() : '';
    const telefone = data.telefone.trim();
    const servicos = data.servicos || [];
    const pontos = data.pontos ? data.pontos.trim() : '';
    const mensagem = data.mensagem.trim();

    // Divide o nome completo em primeiro e último nome para o Apollo
    const nameParts = nome.split(' ');
    const first_name = nameParts[0] || '';
    const last_name = nameParts.slice(1).join(' ') || first_name;

    const apiKey = process.env.APOLLO_API_KEY;

    let apolloSuccess = false;
    let apolloErrorMsg = '';

    if (apiKey && apiKey !== 'sua_api_key_aqui') {
      try {
        console.log('🚀 Criando contato no Apollo CRM para Solicitação de Orçamento...');

        const apolloPayload: Record<string, any> = {
          first_name,
          last_name,
          email,
          organization_name: empresa,
          label_names: ['Solicitação de Orçamento'],
        };

        if (telefone) {
          apolloPayload.phone_numbers = [{ raw_number: telefone }];
        }

        const apolloRes = await fetch('https://api.apollo.io/v1/contacts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
            'x-api-key': apiKey,
          },
          body: JSON.stringify(apolloPayload),
        });

        const apolloData = await apolloRes.json();

        if (apolloRes.ok || apolloData.contact) {
          apolloSuccess = true;
          console.log('✅ Contato de Orçamento criado no Apollo!', apolloData);

          const contactId = apolloData.contact?.id || apolloData.id;

          if (contactId) {
            const servicosStr = servicos.join(', ');
            const cnpjStr = cnpj || 'Não informado';
            const pontosStr = pontos || 'Não informado';

            const noteContent = `Solicitação de Orçamento via Site\nEmpresa: ${empresa}\nCNPJ: ${cnpjStr}\nResponsável: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nServiços de interesse: ${servicosStr}\nPontos/câmeras estimados: ${pontosStr}\n\nDetalhamento: ${mensagem}`;

            try {
              const noteRes = await fetch('https://api.apollo.io/v1/notes', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Cache-Control': 'no-cache',
                  'x-api-key': apiKey,
                },
                body: JSON.stringify({
                  contact_ids: [contactId],
                  note: noteContent,
                }),
              });

              const noteData = await noteRes.json();
              console.log('✅ Resposta da API de notas do Apollo (Status', noteRes.status, '):', noteData);
            } catch (noteErr) {
              console.error('❌ Erro ao adicionar nota de orçamento no Apollo:', noteErr);
            }
          }
        } else {
          console.error('❌ Resposta de erro do Apollo:', apolloData);
          apolloErrorMsg = apolloData.message || apolloData.error || 'Erro na API do Apollo';
        }
      } catch (err: any) {
        console.error('❌ Falha na requisição para o Apollo:', err);
        apolloErrorMsg = err.message || 'Erro de conexão com o Apollo';
      }
    } else {
      console.warn('⚠️ APOLLO_API_KEY não configurada ou usando placeholder em .env.local');
    }

    // Se houver RESEND_API_KEY configurada, enviamos também por e-mail como backup
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: 'suporte@centaurotelecom.com.br',
          to: 'comercial@centaurotelecom.com.br',
          subject: `Solicitação de Orçamento: ${empresa} - ${nome}`,
          html: `
            <div style="font-family: sans-serif; padding: 20px;">
              <h2>Solicitação de Orçamento via Site</h2>
              <p><strong>Empresa:</strong> ${empresa}</p>
              <p><strong>CNPJ:</strong> ${cnpj || 'Não informado'}</p>
              <p><strong>Responsável:</strong> ${nome}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Telefone:</strong> ${telefone}</p>
              <p><strong>Serviços:</strong> ${servicos.join(', ')}</p>
              <p><strong>Pontos Estimados:</strong> ${pontos || 'Não informado'}</p>
              <p><strong>Detalhamento:</strong></p>
              <blockquote style="background: #f9f9f9; padding: 10px; border-left: 4px solid #8b0000;">${mensagem}</blockquote>
            </div>
          `,
        });
      } catch (e) {
        console.error('Erro ao enviar e-mail via Resend:', e);
      }
    }

    if (apiKey && apiKey !== 'sua_api_key_aqui' && !apolloSuccess) {
      return NextResponse.json(
        { success: false, message: `Erro ao salvar orçamento no Apollo CRM: ${apolloErrorMsg}` },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Solicitação de orçamento enviada com sucesso! Nossa equipe comercial entrará em contato em até 1 dia útil.',
    });
  } catch (error: any) {
    console.error('❌ Erro no processamento da solicitação de orçamento:', error);
    return NextResponse.json(
      { success: false, message: 'Erro interno ao enviar orçamento. Tente novamente mais tarde.' },
      { status: 500 }
    );
  }
}
