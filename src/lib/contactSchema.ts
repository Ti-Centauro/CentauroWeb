import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Digite um email válido"),
  phone: z.string().min(10, "Digite um telefone válido (com DDD)"),
  message: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
