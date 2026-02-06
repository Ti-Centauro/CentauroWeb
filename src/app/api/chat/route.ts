import { google } from '@ai-sdk/google';
import { streamText} from 'ai';
import { companyData } from '@/lib/company-data';

export const maxDuration = 30;

export async function POST(req: Request)
{
  const { messages } = await req.json();

  const result = streamText({
    model: google('gemini-2.5-flash'),
    system: `
      Você é um assistente virtual especialista da Centauro Engenharia.
      Sua função é fornecer suporte técnico e comercial para clientes corporativos (B2B).
      
      BASE DE CONHECIMENTO (Contexto Oficial):
      ---
      ${companyData}
      ---
      
      DIRETRIZES DE RESPOSTA:
      1. Use um tom profissional, técnico e corporativo.
      2. Baseie suas respostas ESTRITAMENTE nas informações acima.
      3. Se não encontrar a informação no contexto, diga: "Para essa informação específica, recomendo entrar em contato direto com nosso time no telefone (21) 3176-7900."
      4. Se o usuário perguntar algo nada a ver (receita de bolo, futebol), recuse educadamente mantendo a postura profissional.
      5. IMPORTANTE: Ao responder sobre serviços, seja conciso. Liste apenas os títulos principais (bullet points) e encerre perguntando: "Gostaria de detalhes sobre algum desses serviços em específico?" Não despeje texto longo.
    `,
    messages,
  });
  return result.toTextStreamResponse();
}