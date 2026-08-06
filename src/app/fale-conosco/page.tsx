'use client';

import Link from "next/link";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { useState, FormEvent } from "react";
import { Send, Instagram, Linkedin, LayoutDashboard, CheckCircle2, XCircle, FileText } from "lucide-react";
import { contactSchema, ContactFormData } from "@/lib/contactSchema";

// Configuração da animação
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

type StatusMessage = {
  type: 'success' | 'error';
  text: string;
} | null;

export default function FaleConosco() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [statusMessage, setStatusMessage] = useState<StatusMessage>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    setStatusMessage(null);
    
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData);

    const validation = contactSchema.safeParse(data);
    if (!validation.success) {
      setErrors(validation.error.flatten().fieldErrors as Record<string, string[]>);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        setStatusMessage({ type: 'success', text: result.message || 'Mensagem enviada com sucesso! Entraremos em contato em breve.' });
        formElement.reset();
      } else {
        if (result.errors) {
          setErrors(result.errors);
        } else {
          setStatusMessage({ type: 'error', text: result.message || 'Ocorreu um erro ao enviar sua mensagem. Tente novamente.' });
        }
      }
    } catch {
      setStatusMessage({ type: 'error', text: 'Erro de conexão. Verifique sua internet e tente novamente.' });
    }
    setLoading(false);
  }


  return (
    <main className="w-full max-w-[1200px] mx-auto px-6 lg:px-8 pt-24 pb-32 space-y-24 bg-white">
      
      {/* SEÇÃO 1: HERO (Título) */}
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
              <span className="text-red-700">Fale Conosco</span>
            </div>

            {/* Título Principal */}
            <h1 className="text-6xl lg:text-8xl font-black font-display tracking-tighter text-black leading-[0.9] uppercase">
              ENTRE EM <br />
              <span className="text-red-700 italic font-serif font-bold">CONTATO.</span>
            </h1>

            {/* Subtítulo */}
            <div className="mt-12 max-w-xl">
              <p className="text-xl lg:text-2xl text-gray-800 leading-relaxed font-sans font-light">
                Estamos prontos para ouvir você. Seja para iniciar um novo projeto, tirar dúvidas ou estabelecer parcerias duradouras.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SEÇÃO 2: CONTEÚDO PRINCIPAL (Grid) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20"
      >
        
        {/* ESQUERDA: Formulário (7 Colunas) */}
        <div className="lg:col-span-7">

          {/* Card de Destaque para Orçamento */}
          <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <FileText className="w-8 h-8 text-red-700 shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-black font-display uppercase">
                  É empresa e precisa de um orçamento?
                </h3>
                <p className="text-sm text-gray-700 font-sans font-light mt-1">
                  Temos um formulário dedicado para você. Nossa equipe comercial responde em até 1 dia útil.
                </p>
              </div>
            </div>
            <Link
              href="/orcamento"
              className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-md transition-all duration-300 shrink-0"
            >
              Solicitar Orçamento →
            </Link>
          </div>

          <h2 className="text-3xl font-black font-display uppercase mb-8 text-black">Envie uma Mensagem</h2>
          
          {/* Status Message Banner */}
          <AnimatePresence>
            {statusMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className={`flex items-center gap-3 p-4 mb-6 border ${
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

            {/* Campo Nome */}
            <div className="space-y-2">
               <label htmlFor="nome" className="text-xs font-bold uppercase tracking-widest text-gray-500">Nome</label>
               <input 
                 type="text" 
                 id="nome" 
                 name="nome"
                 required 
                 className={`w-full bg-gray-50 border px-4 py-3 text-gray-900 focus:outline-none focus:ring-1 transition-all duration-300 placeholder:text-gray-300 ${errors.nome || errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-400 focus:border-red-700 focus:ring-red-700'}`}
                 placeholder="Seu nome completo" 
               />
               {(errors.nome || errors.name) && <span className="text-red-500 text-xs font-medium">{(errors.nome || errors.name)?.[0]}</span>}
            </div>

            {/* Campo Email */}
            <div className="space-y-2">
               <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-gray-500">Email</label>
               <input 
                 type="email" 
                 id="email" 
                 name="email"
                 required 
                 className={`w-full bg-gray-50 border px-4 py-3 text-gray-900 focus:outline-none focus:ring-1 transition-all duration-300 placeholder:text-gray-300 ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-400 focus:border-red-700 focus:ring-red-700'}`}
                 placeholder="seu@email.com" 
               />
               {errors.email && <span className="text-red-500 text-xs font-medium">{errors.email[0]}</span>}
            </div>

            {/* Campo Telefone */}
            <div className="space-y-2">
               <label htmlFor="telefone" className="text-xs font-bold uppercase tracking-widest text-gray-500">Telefone</label>
               <input 
                 type="tel" 
                 id="telefone" 
                 name="telefone" 
                 required
                 className={`w-full bg-gray-50 border px-4 py-3 text-gray-900 focus:outline-none focus:ring-1 transition-all duration-300 placeholder:text-gray-300 ${errors.telefone || errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-400 focus:border-red-700 focus:ring-red-700'}`}
                 placeholder="(21) 99999-9999" 
               />
               {(errors.telefone || errors.phone) && <span className="text-red-500 text-xs font-medium">{(errors.telefone || errors.phone)?.[0]}</span>}
            </div>

            {/* Campo Mensagem */}
            <div className="space-y-2">
               <label htmlFor="mensagem" className="text-xs font-bold uppercase tracking-widest text-gray-500">Mensagem</label>
               <textarea 
                 id="mensagem" 
                 name="mensagem" 
                 rows={6} 
                 required 
                 className={`w-full bg-gray-50 border px-4 py-3 text-gray-900 focus:outline-none focus:ring-1 transition-all duration-300 placeholder:text-gray-300 resize-none ${errors.mensagem || errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-400 focus:border-red-700 focus:ring-red-700'}`}
                 placeholder="Como podemos ajudar?"
               ></textarea>
               {(errors.mensagem || errors.message) && <span className="text-red-500 text-xs font-medium">{(errors.mensagem || errors.message)?.[0]}</span>}
            </div>

            {/* Botão de Envio */}
            <div className="pt-4">
              <button 
                type="submit" 
                disabled={loading}
                className="group flex items-center justify-center gap-3 bg-black text-white px-8 py-4 uppercase tracking-widest font-bold text-sm hover:bg-red-800 transition-all duration-300 w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed rounded-md"
              >
                {loading ? "Enviando..." : "Enviar Mensagem"}
                {!loading && <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
              </button>
            </div>
          </form>
        </div>


        {/* DIREITA: Mapa e Infos (5 Colunas) */}
        {/* Adicionamos h-full e flex-col para ocupar a altura toda se o form for grande */}
        <div className="lg:col-span-5 flex flex-col gap-8 h-full">
           
           {/* Mapa */}
           {/* flex-grow (flex-1) faz o mapa ocupar todo o espaço vazio disponível */}
           <div className="flex-1 w-full bg-gray-200 rounded-lg overflow-hidden border border-gray-200 shadow-sm min-h-[350px]">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.310454184767!2d-43.17672854070256!3d-22.90191724717664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5f2c547117%3A0xb43b587d8217965a!2sR.%20Buenos%20Aires%2C%2015%20-%20Centro%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020070-021!5e0!3m2!1spt-BR!2sbr!4v1769696019452!5m2!1spt-BR!2sbr" 
               width="100%" 
               height="100%" 
               style={{ border: 0}} 
               loading="lazy"
               className="hover:filter-none transition-all duration-500"
             ></iframe>
           </div>

           {/* Informações de Texto */}
           <div className="bg-white p-8 border border-white shrink-0">
              <h3 className="font-black font-display uppercase tracking-wider text-black mb-4 text-lg">Nosso Escritório</h3>
              <div className="space-y-4 text-gray-600 font-light font-sans">
                <p>
                  <strong className="text-black font-bold block mb-1 text-sm uppercase tracking-wider">Endereço</strong>
                  R. Buenos Aires, 15 - Centro<br />
                  Rio de Janeiro - RJ
                </p>
                <p>
                  <strong className="text-black font-bold block mb-1 text-sm uppercase tracking-wider">Contato</strong>
                  contato@centaurotelecom.com.br<br />
                  +55 21 3176-7900
                </p>
              </div>

              {/* Redes Sociais */}
              <div className="pt-6 border-t border-gray-200 mt-6">
                  <h3 className="font-black font-display uppercase tracking-wider text-black mb-4 text-sm">Siga-nos</h3>
                  <div className="flex gap-4">
                      <a href="https://www.instagram.com/centauroeng/" className="flex items-center gap-2 text-gray-600 hover:text-red-700 transition-colors font-medium">
                          <Instagram className="w-5 h-5" />
                          Instagram
                      </a>
                      <a href="https://br.linkedin.com/company/centauro-engenharia" className="flex items-center gap-2 text-gray-600 hover:text-red-700 transition-colors font-medium">
                          <Linkedin className="w-5 h-5" />
                          LinkedIn
                      </a>
                  </div>
              </div>

              {/* Portal da Centauro */}
              <div className="pt-6 border-t border-gray-200 mt-6">
                  <h3 className="font-black font-display uppercase tracking-wider text-black mb-4 text-sm">Portal da Centauro</h3>
                  <div className="flex gap-4">
                      <a href="http://www2.centaurotelecom.com.br:8080/centauro_desk/" className="flex items-center gap-2 text-gray-600 hover:text-red-700 transition-colors font-medium">
                          <LayoutDashboard className="w-5 h-5" />
                          Acessar Portal
                      </a>
                  </div>
              </div>
           </div>

        </div>

      </motion.section>

    </main>
  );
}