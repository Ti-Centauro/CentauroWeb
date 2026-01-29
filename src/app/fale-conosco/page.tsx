'use client';

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useState, FormEvent } from "react";
import { Send, Instagram, Linkedin } from "lucide-react";

// Configuração da animação
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function FaleConosco() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        alert("Mensagem enviada com sucesso!");
        (e.target as HTMLFormElement).reset();
      } else {
        alert("Erro ao enviar.");
      }
    } catch(error) {
      console.error(error);
      alert("Erro de conexão.");
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
          <h2 className="text-3xl font-black font-display uppercase mb-8 text-black">Envie uma Mensagem</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Campo Nome */}
            <div className="space-y-2">
               <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-gray-500">Nome</label>
               <input 
                 type="text" 
                 id="name" 
                 name="name"
                 required 
                 className="w-full bg-gray-50 border border-gray-400 px-4 py-3 text-gray-900 focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700 transition-all duration-300 placeholder:text-gray-300" 
                 placeholder="Seu nome completo" 
               />
            </div>

            {/* Grid Email e Telefone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-2">
                 <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-gray-500">Email</label>
                 <input 
                   type="email" 
                   id="email" 
                   name="email"
                   required 
                   className="w-full bg-gray-50 border border-gray-400 px-4 py-3 text-gray-900 focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700 transition-all duration-300 placeholder:text-gray-300" 
                   placeholder="seu@email.com" 
                 />
               </div>
               <div className="space-y-2">
                 <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-gray-500">Telefone</label>
                 <input 
                   type="tel" 
                   id="phone" 
                   name="phone" 
                   className="w-full bg-gray-50 border border-gray-400 px-4 py-3 text-gray-900 focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700 transition-all duration-300 placeholder:text-gray-300" 
                   placeholder="(21) 99999-9999" 
                 />
               </div>
            </div>

            {/* Campo Mensagem */}
            <div className="space-y-2">
               <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-gray-500">Mensagem</label>
               <textarea 
                 id="message" 
                 name="message" 
                 rows={6} 
                 required 
                 className="w-full bg-gray-50 border border-gray-400 px-4 py-3 text-gray-900 focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700 transition-all duration-300 placeholder:text-gray-300 resize-none" 
                 placeholder="Como podemos ajudar?"
               ></textarea>
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
        <div className="lg:col-span-5 space-y-8">
           
           {/* Mapa */}
           <div className="h-[350px] w-full bg-gray-200 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
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
           <div className="bg-gray-50 p-8 border border-gray-100">
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
           </div>

           {/* Redes Sociais */}
           <div className="pt-2">
              <h3 className="font-black font-display uppercase tracking-wider text-black mb-4 text-sm">Siga-nos</h3>
              <div className="flex gap-4">
                  <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-red-700 transition-colors font-medium">
                      <Instagram className="w-5 h-5" />
                      Instagram
                  </a>
                  <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-red-700 transition-colors font-medium">
                      <Linkedin className="w-5 h-5" />
                      LinkedIn
                  </a>
              </div>
           </div>

        </div>

      </motion.section>

    </main>
  );
}