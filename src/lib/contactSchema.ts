import { z } from 'zod';

export const contactSchema = z.object({
  nome: z.string().optional(),
  name: z.string().optional(),
  email: z.string().email("Digite um email válido"),
  empresa: z.string().optional(),
  company: z.string().optional(),
  telefone: z.string().optional(),
  phone: z.string().optional(),
  mensagem: z.string().optional(),
  message: z.string().optional(),
}).superRefine((data, ctx) => {
  const nomeVal = (data.nome || data.name || '').trim();
  if (nomeVal.length < 2) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "O nome deve ter pelo menos 2 caracteres",
      path: ["nome"],
    });
  }

  const telVal = (data.telefone || data.phone || '').trim();
  if (telVal.length < 10) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Digite um telefone válido (com DDD)",
      path: ["telefone"],
    });
  }

  const msgVal = (data.mensagem || data.message || '').trim();
  if (msgVal.length < 10) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "A mensagem deve ter pelo menos 10 caracteres",
      path: ["mensagem"],
    });
  }
});

export type ContactFormData = z.infer<typeof contactSchema>;

