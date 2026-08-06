'use client';

import Link from "next/link";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { useState, FormEvent } from "react";
import { FileText, CheckCircle2, XCircle, Mail, Phone, Check } from "lucide-react";
import { orcamentoSchema } from "@/lib/orcamentoSchema";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

type StatusMessage = {
  type: 'success' | 'error';
  text: string;
} | null;

const listaServicos = [
  { id: "CFTV", label: "CFTV (Câmeras de Segurança)" },
  { id: "SDAI", label: "SDAI (Alarme de Incêndio)" },
  { id: "SCA", label: "SCA (Controle de Acesso)" },
  { id: "SAI", label: "SAI (Alerta de Intrusão)" },
  { id: "Sonorização", label: "Sonorização" },
  { id: "Redes", label: "Redes e Cabeamento Estruturado" },
];

export default function OrcamentoPage() {
  const [loading, setLoading] = useState(false);
  const [selectedServicos, setSelectedServicos] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [statusMessage, setStatusMessage] = useState<StatusMessage>(null);

  const toggleServico = (servicoId: string) => {
    setSelectedServicos((prev) =>
      prev.includes(servicoId)
        ? prev.filter((s) => s !== servicoId)
        : [...prev, servicoId]
    );
    if (errors.servicos) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.servicos;
        return next;
      });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    setStatusMessage(null);

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    const data = {
      nome: (formData.get('nome') as string) || '',
      email: (formData.get('email') as string) || '',
      empresa: (formData.get('empresa') as string) || '',
      cnpj: (formData.get('cnpj') as string) || '',
      telefone: (formData.get('telefone') as string) || '',
      servicos: selectedServicos,
      pontos: (formData.get('pontos') as string) || '',
      mensagem: (formData.get('mensagem') as string) || '',
    };

    const validation = orcamentoSchema.safeParse(data);
    if (!validation.success) {
      setErrors(validation.error.flatten().fieldErrors as Record<string, string[]>);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/orcamento', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatusMessage({
          type: 'success',
          text: result.message || 'Solicitação de orçamento enviada com sucesso! Entraremos em contato em até 1 dia útil.',
        });
        formElement.reset();
        setSelectedServicos([]);
      } else {
        if (result.errors) {
          setErrors(result.errors);
        } else {
          setStatusMessage({
            type: 'error',
            text: result.message || 'Ocorreu um erro ao enviar sua solicitação. Tente novamente.',
          });
        }
      }
    } catch {
      setStatusMessage({
        type: 'error',
        text: 'Erro de conexão. Verifique sua internet e tente novamente.',
      });
    }
    setLoading(false);
  };

  return (
    <main className="w-full max-w-[1200px] mx-auto px-6 lg:px-8 pt-24 pb-32 space-y-24 bg-white">
      
      {/* SEÇÃO 1: HERO */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="relative pt-12 lg:pt-20 border-b border-gray-100 pb-20"
      >
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12">
          <div className="w-full">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-gray-500 text-sm font-medium mb-8 uppercase tracking-widest font-sans">
              <Link href="/" className="hover:text-red-700 transition-colors">Home</Link>
              <span className="text-red-700">/</span>
              <span className="text-red-700">Solicitar Orçamento</span>
            </div>

            {/* Título Principal */}
            <h1 className="text-6xl lg:text-8xl font-black font-display tracking-tighter text-black leading-[0.9] uppercase">
              SOLICITE SEU <br />
              <span className="text-red-700 italic font-serif font-bold">ORÇAMENTO.</span>
            </h1>

            {/* Subtítulo */}
            <div className="mt-12 max-w-2xl">
              <p className="text-xl lg:text-2xl text-gray-800 leading-relaxed font-sans font-light">
                Preencha o formulário abaixo e nossa equipe comercial entrará em contato em até 1 dia útil com uma proposta personalizada.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SEÇÃO 2: CONTEÚDO PRINCIPAL (Grid 7/5) */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20"
      >

        {/* ESQUERDA: Formulário (7 Colunas) */}
        <div className="lg:col-span-7">
          <h2 className="text-3xl font-black font-display uppercase mb-8 text-black">Formulário para Empresas</h2>

          {/* Banner de Feedback Animado */}
          <AnimatePresence>
            {statusMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className={`flex items-center gap-3 p-4 mb-6 border rounded-md ${
                  statusMessage.type === 'success'
                    ? 'bg-green-50 border-green-200 text-green-800'
                    : 'bg-red-50 border-red-200 text-red-800'
                }`}
              >
                {statusMessage.type === 'success'
                  ? <CheckCircle2 className="w-5 h-5 shrink-0" />
                  : <XCircle className="w-5 h-5 shrink-0" />
                }
                <span className="text-sm font-medium flex-1">{statusMessage.text}</span>
                <button
                  onClick={() => setStatusMessage(null)}
                  className="text-current opacity-50 hover:opacity-100 transition-opacity text-lg leading-none"
                  aria-label="Fechar"
                >
                  ×
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Nome do Responsável */}
            <div className="space-y-2">
              <label htmlFor="nome" className="text-xs font-bold uppercase tracking-widest text-gray-500">
                Nome do Responsável
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                required
                className={`w-full bg-gray-50 border px-4 py-3 text-gray-900 focus:outline-none focus:ring-1 transition-all duration-300 placeholder:text-gray-300 ${
                  errors.nome ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-400 focus:border-red-700 focus:ring-red-700'
                }`}
                placeholder="Seu nome completo"
              />
              {errors.nome && <span className="text-red-500 text-xs font-medium">{errors.nome[0]}</span>}
            </div>

            {/* Grid Email e Empresa */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-gray-500">
                  Email Corporativo
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={`w-full bg-gray-50 border px-4 py-3 text-gray-900 focus:outline-none focus:ring-1 transition-all duration-300 placeholder:text-gray-300 ${
                    errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-400 focus:border-red-700 focus:ring-red-700'
                  }`}
                  placeholder="seu@empresa.com.br"
                />
                {errors.email && <span className="text-red-500 text-xs font-medium">{errors.email[0]}</span>}
              </div>
              <div className="space-y-2">
                <label htmlFor="empresa" className="text-xs font-bold uppercase tracking-widest text-gray-500">
                  Empresa / Razão Social
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  required
                  className={`w-full bg-gray-50 border px-4 py-3 text-gray-900 focus:outline-none focus:ring-1 transition-all duration-300 placeholder:text-gray-300 ${
                    errors.empresa ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-400 focus:border-red-700 focus:ring-red-700'
                  }`}
                  placeholder="Nome da sua empresa"
                />
                {errors.empresa && <span className="text-red-500 text-xs font-medium">{errors.empresa[0]}</span>}
              </div>
            </div>

            {/* Grid CNPJ e Telefone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="cnpj" className="text-xs font-bold uppercase tracking-widest text-gray-500">
                  CNPJ (opcional)
                </label>
                <input
                  type="text"
                  id="cnpj"
                  name="cnpj"
                  className="w-full bg-gray-50 border border-gray-400 px-4 py-3 text-gray-900 focus:outline-none focus:ring-1 focus:border-red-700 focus:ring-red-700 transition-all duration-300 placeholder:text-gray-300"
                  placeholder="00.000.000/0001-00"
                />
                {errors.cnpj && <span className="text-red-500 text-xs font-medium">{errors.cnpj[0]}</span>}
              </div>
              <div className="space-y-2">
                <label htmlFor="telefone" className="text-xs font-bold uppercase tracking-widest text-gray-500">
                  Telefone / WhatsApp
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  required
                  className={`w-full bg-gray-50 border px-4 py-3 text-gray-900 focus:outline-none focus:ring-1 transition-all duration-300 placeholder:text-gray-300 ${
                    errors.telefone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-400 focus:border-red-700 focus:ring-red-700'
                  }`}
                  placeholder="(21) 99999-9999"
                />
                {errors.telefone && <span className="text-red-500 text-xs font-medium">{errors.telefone[0]}</span>}
              </div>
            </div>

            {/* Serviços de Interesse */}
            <div className="space-y-3 pt-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500 block">
                Serviços de Interesse (Selecione ao menos um)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {listaServicos.map((servico) => {
                  const checked = selectedServicos.includes(servico.id);
                  return (
                    <label
                      key={servico.id}
                      onClick={() => toggleServico(servico.id)}
                      className={`flex items-center gap-3 p-3.5 border rounded-md cursor-pointer transition-all duration-200 ${
                        checked
                          ? 'bg-red-50/60 border-red-700 text-red-900 font-semibold shadow-sm'
                          : 'bg-gray-50 border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                          checked ? 'bg-red-700 border-red-700 text-white' : 'border-gray-400 bg-white'
                        }`}
                      >
                        {checked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <span className="text-sm font-sans">{servico.label}</span>
                    </label>
                  );
                })}
              </div>
              {errors.servicos && <span className="text-red-500 text-xs font-medium block">{errors.servicos[0]}</span>}
            </div>

            {/* Pontos/Câmeras estimados */}
            <div className="space-y-2 pt-2">
              <label htmlFor="pontos" className="text-xs font-bold uppercase tracking-widest text-gray-500">
                Número Estimado de Pontos / Câmeras (opcional)
              </label>
              <input
                type="text"
                id="pontos"
                name="pontos"
                className="w-full bg-gray-50 border border-gray-400 px-4 py-3 text-gray-900 focus:outline-none focus:ring-1 focus:border-red-700 focus:ring-red-700 transition-all duration-300 placeholder:text-gray-300"
                placeholder="Ex: 16 câmeras, 8 pontos de controle de acesso"
              />
            </div>

            {/* Detalhamento */}
            <div className="space-y-2">
              <label htmlFor="mensagem" className="text-xs font-bold uppercase tracking-widest text-gray-500">
                Detalhamento da Necessidade
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={6}
                required
                className={`w-full bg-gray-50 border px-4 py-3 text-gray-900 focus:outline-none focus:ring-1 transition-all duration-300 placeholder:text-gray-300 resize-none ${
                  errors.mensagem ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-400 focus:border-red-700 focus:ring-red-700'
                }`}
                placeholder="Descreva o projeto, particularidades do local, prazos ou necessidades específicas..."
              ></textarea>
              {errors.mensagem && <span className="text-red-500 text-xs font-medium">{errors.mensagem[0]}</span>}
            </div>

            {/* Botão de Envio */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="group flex items-center justify-center gap-3 bg-black text-white px-8 py-4 uppercase tracking-widest font-bold text-sm hover:bg-red-800 transition-all duration-300 w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed rounded-md"
              >
                {loading ? "Enviando Solicitação..." : "Solicitar Orçamento"}
                {!loading && <FileText className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
              </button>
            </div>

          </form>
        </div>

        {/* DIREITA: Card e Contato Comercial (5 Colunas) */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          
          {/* Card Escuro "Por que a Centauro?" */}
          <div className="bg-black text-white p-8 rounded-lg shadow-xl space-y-6 border border-zinc-800">
            <h3 className="text-xl font-black font-display uppercase tracking-wider text-white border-b border-zinc-800 pb-4">
              Por que a Centauro?
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <span className="font-sans font-light text-gray-200 text-sm leading-relaxed">
                  <strong className="font-semibold text-white">+20 anos de experiência</strong> em segurança eletrônica e engenharia
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <span className="font-sans font-light text-gray-200 text-sm leading-relaxed">
                  Projetos sob medida para <strong className="font-semibold text-white">pequenas, médias e grandes empresas</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <span className="font-sans font-light text-gray-200 text-sm leading-relaxed">
                  <strong className="font-semibold text-white">Equipe técnica certificada</strong> pelas principais fabricantes do mercado
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <span className="font-sans font-light text-gray-200 text-sm leading-relaxed">
                  Suporte contínuo e <strong className="font-semibold text-white">manutenção pós-instalação</strong> especializada
                </span>
              </li>
            </ul>
          </div>

          {/* Informações Comerciais */}
          <div className="bg-white p-8 border border-gray-200 rounded-lg space-y-6 shadow-sm">
            <h3 className="font-black font-display uppercase tracking-wider text-black text-lg">
              Atendimento Comercial Direto
            </h3>
            <div className="space-y-4 text-gray-600 font-sans font-light">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-700 shrink-0" />
                <div>
                  <strong className="text-black font-bold block text-xs uppercase tracking-wider">Email Comercial</strong>
                  <a href="mailto:comercial@centaurotelecom.com.br" className="hover:text-red-700 transition-colors">
                    comercial@centaurotelecom.com.br
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <Phone className="w-5 h-5 text-red-700 shrink-0" />
                <div>
                  <strong className="text-black font-bold block text-xs uppercase tracking-wider">Telefone</strong>
                  <a href="tel:+552131767900" className="hover:text-red-700 transition-colors">
                    +55 21 3176-7900
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </motion.section>

    </main>
  );
}
