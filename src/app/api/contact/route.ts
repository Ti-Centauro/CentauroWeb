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
      to: 'suporte@centaurotelecom.com.br',
      subject: `Novo Contato: ${data.name}`,
      html: `
        <h2>Novo contato pelo site!</h2>
        <p><strong>Nome:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Telefone:</strong> ${data.phone}</p>
        <p><strong>Mensagem:</strong> ${data.message}</p>
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