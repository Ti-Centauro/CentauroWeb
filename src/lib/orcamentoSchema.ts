import { z } from 'zod';

export const orcamentoSchema = z.object({
  nome: z.string().min(2, "O nome do responsável deve ter pelo menos 2 caracteres"),
  email: z.string().email("Digite um e-mail corporativo válido"),
  empresa: z.string().min(2, "Digite o nome da empresa"),
  cnpj: z.string().optional(),
  telefone: z.string().min(10, "Digite um telefone válido (com DDD)"),
  servicos: z.array(z.string()).min(1, "Selecione pelo menos um serviço de interesse"),
  pontos: z.string().optional(),
  mensagem: z.string().min(10, "O detalhamento deve ter pelo menos 10 caracteres"),
});

export type OrcamentoFormData = z.infer<typeof orcamentoSchema>;
