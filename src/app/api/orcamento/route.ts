import { NextResponse } from 'next/server';
import { orcamentoSchema } from '@/lib/orcamentoSchema';
import { Resend } from 'resend';

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };

    return entities[character];
  });
}

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

    const resendApiKey = process.env.RESEND_API_KEY?.trim();
    if (!resendApiKey) {
      console.error('RESEND_API_KEY não configurada; orçamento não foi enviado por e-mail.');
      return NextResponse.json(
        {
          success: false,
          message: 'O envio está temporariamente indisponível. Tente novamente mais tarde ou escreva para comercial@centaurotelecom.com.br.',
        },
        { status: 503 }
      );
    }

    const escape = (value: string) => escapeHtml(value);
    const html = `
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Solicitação de Orçamento via Site</h2>
        <p><strong>Empresa:</strong> ${escape(empresa)}</p>
        <p><strong>CNPJ:</strong> ${escape(cnpj || 'Não informado')}</p>
        <p><strong>Responsável:</strong> ${escape(nome)}</p>
        <p><strong>Email:</strong> ${escape(email)}</p>
        <p><strong>Telefone:</strong> ${escape(telefone)}</p>
        <p><strong>Serviços:</strong> ${escape(servicos.join(', '))}</p>
        <p><strong>Pontos Estimados:</strong> ${escape(pontos || 'Não informado')}</p>
        <p><strong>Detalhamento:</strong></p>
        <blockquote style="background: #f9f9f9; padding: 10px; border-left: 4px solid #8b0000;">${escape(mensagem).replace(/\r?\n/g, '<br>')}</blockquote>
      </div>
    `;

    try {
      const { error } = await new Resend(resendApiKey).emails.send({
        from: 'suporte@centaurotelecom.com.br',
        to: 'comercial@centaurotelecom.com.br',
        subject: `Solicitação de Orçamento: ${empresa} - ${nome}`,
        html,
      });

      if (error) {
        console.error('Resend recusou o envio do orçamento:', error.name, error.statusCode);
        return NextResponse.json(
          {
            success: false,
            message: 'Não foi possível enviar sua solicitação agora. Tente novamente mais tarde ou escreva para comercial@centaurotelecom.com.br.',
          },
          { status: 502 }
        );
      }
    } catch (error) {
      console.error('Erro ao enviar orçamento pelo Resend:', error instanceof Error ? error.name : 'erro desconhecido');
      return NextResponse.json(
        {
          success: false,
          message: 'Não foi possível enviar sua solicitação agora. Tente novamente mais tarde ou escreva para comercial@centaurotelecom.com.br.',
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Solicitação de orçamento enviada com sucesso! Nossa equipe comercial entrará em contato em até 1 dia útil.',
    });
  } catch (error) {
    console.error('Erro no processamento da solicitação de orçamento:', error instanceof Error ? error.name : 'erro desconhecido');
    return NextResponse.json(
      { success: false, message: 'Erro interno ao enviar orçamento. Tente novamente mais tarde.' },
      { status: 500 }
    );
  }
}
