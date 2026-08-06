import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/contactSchema';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validação com Zod
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = result.data;
    const nome = (data.nome || data.name || '').trim();
    const email = (data.email || '').trim();
    const empresa = (data.empresa || data.company || '').trim();
    const telefone = (data.telefone || data.phone || '').trim();
    const mensagem = (data.mensagem || data.message || '').trim();

    // Se houver RESEND_API_KEY configurada, enviamos por e-mail
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: 'suporte@centaurotelecom.com.br',
          to: 'contato@centaurotelecom.com.br',
          subject: `Novo Contato do Site: ${nome}`,
          html: `
            <div style="font-family: sans-serif; padding: 20px;">
              <h2>Novo Contato via Site</h2>
              <p><strong>Nome:</strong> ${nome}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Empresa:</strong> ${empresa || 'Não informada'}</p>
              <p><strong>Telefone:</strong> ${telefone}</p>
              <p><strong>Mensagem:</strong></p>
              <blockquote style="background: #f9f9f9; padding: 10px; border-left: 4px solid #8b0000;">${mensagem}</blockquote>
            </div>
          `,
        });
      } catch (e) {
        console.error('Erro ao enviar e-mail via Resend:', e);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
    });
  } catch (error: any) {
    console.error('❌ Erro no processamento do formulário:', error);
    return NextResponse.json(
      { success: false, message: 'Erro interno ao enviar mensagem. Tente novamente mais tarde.' },
      { status: 500 }
    );
  }
}