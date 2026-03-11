import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactSchema } from '@/lib/contactSchema';

// Inicializa o Resend com a chave que guardamos no arquivo secreto
const resend = new Resend(process.env.RESEND_API_KEY);

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

    console.log("📨 Enviando email via Resend...");

    // Envia o email de verdade
    const { data: resendResponseData, error } = await resend.emails.send({
      from: 'suporte@centaurotelecom.com.br',
      to: 'contato@centaurotelecom.com.br',
      subject: `Novo Contato: ${data.name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body style="font-family: Arial, sans-serif; color: #333; background-color: #f4f4f4; padding: 20px;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-top: 5px solid #8b0000; border-radius: 8px; padding: 30px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
            
            <!-- ÁREA DA LOGO -->
            <div style="text-align: center; margin-bottom: 20px;">
              <!-- ATENÇÃO: Troque a URL abaixo pelo link novo e funcionando da sua logo -->
              <img src="https://i.postimg.cc/TPzFmx0z/1631380668551.png" alt="Logo Centauro" style="max-width: 180px; height: auto;">
            </div>

            <h2 style="color: #8b0000; border-bottom: 1px solid #eaeaea; padding-bottom: 10px; margin-top: 0; text-align: center;">
              Novo Contato via Site
            </h2>
            
            <div style="margin-top: 25px; font-size: 15px;">
              <p style="margin: 8px 0;"><strong>Nome do Cliente:</strong> ${data.name}</p>
              <p style="margin: 8px 0;"><strong>E-mail:</strong> <a href="mailto:${data.email}" style="color: #8b0000; text-decoration: none; font-weight: bold;">${data.email}</a></p>
              <p style="margin: 8px 0;"><strong>Telefone:</strong> ${data.phone}</p>
            </div>

            <div style="background-color: #fff5f5; border-left: 4px solid #8b0000; padding: 15px; margin-top: 25px;">
              <p style="margin-top: 0; color: #8b0000; font-weight: bold;">Mensagem:</p>
              <p style="white-space: pre-wrap; line-height: 1.6; margin-bottom: 0;">${data.message}</p>
            </div>
            
            <p style="font-size: 12px; color: #999; margin-top: 40px; text-align: center; border-top: 1px solid #eaeaea; padding-top: 20px;">
              Mensagem enviada através do formulário de contato do site Centauro Engenharia.
            </p>
          </div>
        </body>
        </html>
      `
    });

    if (error) {
      console.error("❌ Erro do Resend:", error);
      return NextResponse.json({ success: false, message: error.message }, { status: 400 });
    }

    console.log("✅ Email enviado com sucesso!", resendResponseData);
    return NextResponse.json({ success: true, message: "Email enviado!" });

  } catch (error) {
    console.error("❌ Erro ao enviar:", error);
    return NextResponse.json({ success: false, message: "Erro ao enviar email" }, { status: 500 });
  }
}