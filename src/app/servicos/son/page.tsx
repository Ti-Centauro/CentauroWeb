'use client';
import React from "react";
import { 
  Speaker, 
  Volume2, 
  Mic2, 
  CheckCircle2
} from "lucide-react";
import Link from "next/link"; 
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function SONLandingPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* 
        HERO SECTION 
      */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="relative w-full py-24 lg:py-34 bg-white"
      >
        {/* AJUSTE AQUI: Mude 60% e 40% para ajustar a divisão da tela (ex: 55%_45%, 50%_50%) */}
        {/* gap-4 é o espaço entre o texto e a imagem. Se aumentar, pode causar scroll se o texto for muito grande */}
        <div className="container mx-auto px-6 grid lg:grid-cols-[60%_40%] gap-2 items-center">
          <div className="space-y-8">
            <p className="text-xs font-bold tracking-[0.2em] text-red-700 uppercase font-sans">
              Áudio Profissional
            </p>
            <h1 className="text-4xl md:text-7xl lg:text-7xl xl:text-8xl font-black font-display text-black leading-[0.9] tracking-tighter uppercase">
              SISTEMA DE <br />
              <div className="flex flex-col">
                <span className="text-black">SONORIZAÇÃO</span>
                <span className="text-red-800 tracking-[0.01em]">AMBIENTE</span>
              </div>
            </h1>
            <p className="text-gray-600 max-w-md text-lg leading-relaxed border-l-4 border-red-700 pl-6 font-sans">
              Comunicação clara e envolvente para todos os espaços. Tecnologia de áudio para anúncios, música ambiente e evacuação por voz.
            </p>
          </div>
          {/* Image Container */}
          <div className="relative h-[400px] lg:h-[600px] w-full bg-gray-50 border border-gray-100">
             <Image
                src="/son_pagina2.webp" 
                alt="Sistema de Sonorização"
                fill
                className="object-cover opacity-100 lg:grayscale lg:hover:grayscale-0 transition-all duration-300"
             />
             <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-red-700" />
          </div>
        </div>
      </motion.section>

      {/* 
        SPLIT SECTION: PROBLEM VS SOLUTION 
      */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="grid lg:grid-cols-2"
      >
        {/* PROBLEM (Left) */}
        <div className="bg-black text-white p-12 lg:p-24 flex flex-col justify-start relative lg:h-full border-b-8 lg:border-b-0 lg:border-r-8 border-red-700 py-12 lg:py-24 pr-12 lg:pr-24 pl-8 lg:pl-16">
          <h2 className="text-sm font-black text-red-700 mb-6 tracking-widest uppercase font-sans">
            O Cenário Atual
          </h2>
          <h3 className="text-4xl md:text-5xl font-black font-display leading-tight mb-8 uppercase">
            Ruído e <br/> Distorção
          </h3>
          
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-sans font-light">
            <p>
              Ambientes com acústica ruim e equipamentos inadequados geram eco, microfonia e mensagens ininteligíveis, prejudicando a experiência do cliente e a segurança.
            </p>
            <p>
              Falta de setorização impede que anúncios sejam direcionados, criando poluição sonora desnecessária em toda a empresa.
            </p>
          </div>
        </div>

        {/* SOLUTION (Right) */}
        <div className="bg-white text-black p-12 lg:p-24 flex flex-col justify-start border-l border-gray-100 lg:h-full">
          <h2 className="text-sm font-black text-gray-900 mb-6 tracking-widest uppercase font-sans">
            A Solução Centauro
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif italic text-red-700 mb-8 font-bold">
            Som Cristalino
          </h3>
          
          <p className="text-gray-600 mb-10 text-lg font-sans font-light">
            Projetamos sistemas acústicos de alta fidelidade, com zoneamento inteligente e integração com sistemas de alarme para evacuação segura.
          </p>
          <ul className="space-y-6">
            {[
              "Sonorização Ambiente e Public Address (PA)",
              "Sistemas de Evacuação por Voz (VACIE)",
              "Auditórios e Salas de Reunião",
              "Masceamento de Som (Sound Masking)"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 group">
                <CheckCircle2 className="w-6 h-6 text-red-700 shrink-0 mt-1" />
                <span className="font-medium text-gray-800 font-sans">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* 
        DIFFERENTIALS 
      */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-24 lg:py-32 bg-gray-50"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black font-display text-black uppercase tracking-tight">Diferenciais Técnicos</h2>
            <div className="w-16 h-1 bg-red-700 mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 border border-gray-200 hover:border-red-700 transition-colors duration-300 group">
              <div className="w-12 h-12 bg-red-50 flex items-center justify-center mb-6 group-hover:bg-red-700 transition-colors">
                <Volume2 className="w-6 h-6 text-red-700 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold font-display mb-4 uppercase text-black">Inteligibilidade</h4>
              <p className="text-gray-500 text-sm leading-relaxed font-sans">
                Garantia de que 100% das mensagens sejam compreendidas, mesmo em ambientes com ruído de fundo.
              </p>
            </div>
            <div className="bg-white p-10 border border-gray-200 hover:border-red-700 transition-colors duration-300 group">
              <div className="w-12 h-12 bg-red-50 flex items-center justify-center mb-6 group-hover:bg-red-700 transition-colors">
                <Speaker className="w-6 h-6 text-red-700 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold font-display mb-4 uppercase text-black">Zoneamento Flexível</h4>
              <p className="text-gray-500 text-sm leading-relaxed font-sans">
                Controle volumes e conteúdos diferentes para recepção, escritórios, corredores e áreas comuns.
              </p>
            </div>
            <div className="bg-white p-10 border border-gray-200 hover:border-red-700 transition-colors duration-300 group">
              <div className="w-12 h-12 bg-red-50 flex items-center justify-center mb-6 group-hover:bg-red-700 transition-colors">
                <Mic2 className="w-6 h-6 text-red-700 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold font-display mb-4 uppercase text-black">Gestão via IP</h4>
              <p className="text-gray-500 text-sm leading-relaxed font-sans">
                Gerenciamento centralizado de playlists, agendamento de mensagens e monitoramento de amplificadores.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 
        PROCESS SECTION 
      */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-8 bg-white border-y border-gray-100 pb-40"
      >
        <div className="w-full max-w-[1200px] mx-auto px-6">
           <div className="mb-12">
              <span className="font-serif italic text-red-700 text-lg font-bold">Metodologia</span>
              <h2 className="text-4xl font-black font-display uppercase mt-2 text-black">Nosso Processo</h2>
           </div>
           <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              <div className="border-t-2 border-gray-200 pt-6 group hover:border-red-700 transition-colors duration-300 relative">
                 <h3 className="text-xl font-bold font-display mb-4 uppercase text-black">Acústica</h3>
                 <p className="text-gray-500 text-sm font-sans">Análise do ambiente e simulação eletroacústica para definir posicionamento.</p>
              </div>
              <div className="border-t-2 border-gray-200 pt-6 group hover:border-red-700 transition-colors duration-300 relative">
                 <h3 className="text-xl font-bold font-display mb-4 uppercase text-black">Instalação</h3>
                 <p className="text-gray-500 text-sm font-sans">Cabeamento balanceado e fixação segura de caixas acústicas e cornetas.</p>
              </div>
              <div className="border-t-2 border-gray-200 pt-6 group hover:border-red-700 transition-colors duration-300 relative">
                 <h3 className="text-xl font-bold font-display mb-4 uppercase text-black">Manutenção</h3>
                 <p className="text-gray-500 text-sm font-sans">Cobertura plena com manutenção preventiva e corretiva. Visitas periódicas e reparação de incidências.</p>
              </div>
           </div>
        </div>
      </motion.section>

      {/* 
        FOOTER CTA
      */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-24 bg-[#0a0a0a] text-white text-center relative overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/40 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-black font-display uppercase mb-8 leading-tight tracking-tight">
           SOM AMBIENTE <br />
           PERFEITO
          </h2>
          <p className="text-gray-400 mb-12 max-w-xl mx-auto font-sans text-base">
            Transforme a experiência do seu espaço. Fale com nossos engenheiros de áudio agora.
          </p>
          
          <div className="flex flex-col items-center gap-8">
             <Link href="/fale-conosco" className="bg-red-800 text-white px-12 py-4 font-bold font-display uppercase tracking-widest hover:bg-red-700 transition-all shadow-[0_0_40px_rgba(153,27,27,0.3)] hover:shadow-[0_0_60px_rgba(153,27,27,0.5)]">
               ENTRE EM CONTATO CONOSCO
             </Link>
          </div>
        </div>
      </motion.section>

      {/* 
        PARTNERS SECTION 
      */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-24 bg-white border-t border-gray-100"
      >
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-black font-display uppercase tracking-tight text-red-800 mb-4">Parceiros</h2>
               <p className="text-gray-900 max-w-2xl mx-auto font-sans text-lg">
                 Trabalhamos com as melhores marcas de áudio profissional do mundo.
               </p>
            </div>

            {/* Logo Slider / Grid */}
            <div className="flex flex-wrap justify-center gap-20 lg:gap-32 items-center max-w-5xl mx-auto">
               <div className="relative w-40 h-20 opacity-100 hover:opacity-70 transition-all duration-300 flex items-center justify-center">
                  <Image src="/logos/boschOk.webp" alt="Bosch" fill className="object-contain" />
               </div>
               <div className="relative w-40 h-20 opacity-100 hover:opacity-70 transition-all duration-300 flex items-center justify-center">
                  <Image src="/logos/apelOK.webp" alt="Apel" fill className="object-contain" />
               </div>
            </div>
         </div>
      </motion.section>
    </main>
  );
}
