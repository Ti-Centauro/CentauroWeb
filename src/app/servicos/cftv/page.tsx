'use client'
import React from "react";
import { 
  MonitorCheck, 
  Cpu, 
  ScanEye, 
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
export default function CFTVLandingPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* 
        HERO SECTION 
        - High Contrast
        - Standard Project Fonts and Colors
      */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="relative w-full py-24 lg:py-34 bg-white"
      >
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <p className="text-xs font-bold tracking-[0.2em] text-red-700 uppercase font-sans">
              Segurança Integrada
            </p>
            <h1 className="text-6xl md:text-8xl font-black font-display text-black leading-[0.9] tracking-tighter uppercase">
              SOLUÇÕES <br />
              <div className="flex flex-col">
                <span className="text-black">EM</span>
                <span className="text-red-800 tracking-[0.01em]">CFTV</span>
              </div>
            </h1>
            <p className="text-gray-600 max-w-md text-lg leading-relaxed border-l-4 border-red-700 pl-6 font-sans">
              Monitoramento efetivo de acesso e movimentação de pessoas e produtos, inibindo fraudes e protegendo clientes e funcionários.
            </p>
          </div>
          {/* Simple Image Container - No fancy CSS masks */}
          <div className="relative h-[400px] lg:h-[600px] w-full bg-gray-50 border border-gray-100">
             <Image
                src="/cftv_dashboard.webp" 
                alt="Monitoramento CFTV"
                fill
                className="object-cover opacity-90 grayscale hover:grayscale-0 transition-all duration-300"
             />
             {/* Decorative element - Keeping the red square as a brand element */}
             <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-red-700" />
          </div>
        </div>
      </motion.section>
      {/* 
        SPLIT SECTION: PROBLEM VS SOLUTION 
        - Standard Colors: bg-black, text-white
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
            RISCOS <br/> OPERACIONAIS
          </h3>
          
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-sans font-light">
            <p>
              Sem um sistema de monitoramento adequado, atividades como fraudes, roubos e falsos acidentes podem ocorrer sem controle, gerando prejuízos.
            </p>
            <p>
              A falta de documentação de atividades suspeitas impede a tomada de decisões assertivas e compromete a segurança de instalações críticas.
            </p>
          </div>
        </div>
        {/* SOLUTION (Right) */}
        <div className="bg-white text-black p-12 lg:p-24 flex flex-col justify-start border-l border-gray-100 lg:h-full">
          <h2 className="text-sm font-black text-gray-900 mb-6 tracking-widest uppercase font-sans">
            A Resposta Centauro
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif italic text-red-700 mb-8 font-bold">
            Controle Total
          </h3>
          
          <p className="text-gray-600 mb-10 text-lg font-sans font-light">
            Câmeras de alta performance e acesso remoto em tempo real, protegido por senha, permitindo o acompanhamento e gravação simultânea das imagens no computador.
          </p>
          <ul className="space-y-6">
            {[
              "Câmeras IP avançadas em redes de TI",
              "Detecção de movimento programável",
              "Impressão de imagens e backups digitais",
              "Alertas automáticos para centrais críticas"
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
        variants={fadeInUp}
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
                <ScanEye className="w-6 h-6 text-red-700 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold font-display mb-4 uppercase text-black">Monitoramento Remoto</h4>
              <p className="text-gray-500 text-sm leading-relaxed font-sans">
                Acompanhamento efetivo de acesso e movimentação de pessoas e produtos em locais estratégicos.
              </p>
            </div>
            <div className="bg-white p-10 border border-gray-200 hover:border-red-700 transition-colors duration-300 group">
              <div className="w-12 h-12 bg-red-50 flex items-center justify-center mb-6 group-hover:bg-red-700 transition-colors">
                <Cpu className="w-6 h-6 text-red-700 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold font-display mb-4 uppercase text-black">Tecnologia IP</h4>
              <p className="text-gray-500 text-sm leading-relaxed font-sans">
                Trabalhamos com Câmeras IP avançadas que ajudam a documentar atividades suspeitas em diversos locais.
              </p>
            </div>
            <div className="bg-white p-10 border border-gray-200 hover:border-red-700 transition-colors duration-300 group">
              <div className="w-12 h-12 bg-red-50 flex items-center justify-center mb-6 group-hover:bg-red-700 transition-colors">
                <MonitorCheck className="w-6 h-6 text-red-700 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold font-display mb-4 uppercase text-black">Instalações Críticas</h4>
              <p className="text-gray-500 text-sm leading-relaxed font-sans">
                Proteção para centrais de telecomunicações e produção de energia com acionamento de alertas automáticos.
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
                 <span className="text-8xl font-black text-gray-100 absolute -top-8 right-0 -z-10 font-display select-none">01</span>
                 <h3 className="text-xl font-bold font-display mb-4 uppercase text-black">Planejamento</h3>
                 <p className="text-gray-500 text-sm font-sans">Mapeamento de riscos e desenho de projeto personalizado para cobrir pontos críticos da infraestrutura.</p>
              </div>
              <div className="border-t-2 border-gray-200 pt-6 group hover:border-red-700 transition-colors duration-300 relative">
                 <span className="text-8xl font-black text-gray-100 absolute -top-8 right-0 -z-10 font-display select-none">02</span>
                 <h3 className="text-xl font-bold font-display mb-4 uppercase text-black">Implementação</h3>
                 <p className="text-gray-500 text-sm font-sans">Instalação limpa e configuração de rede dedicada, garantindo integridade visual e estabilidade.</p>
              </div>
              <div className="border-t-2 border-gray-200 pt-6 group hover:border-red-700 transition-colors duration-300 relative">
                 <span className="text-8xl font-black text-gray-100 absolute -top-8 right-0 -z-10 font-display select-none">03</span>
                 <h3 className="text-xl font-bold font-display mb-4 uppercase text-black">Manutenção</h3>
                 <p className="text-gray-500 text-sm font-sans">Cobertura plena com manutenção preventiva e corretiva. Visitas periódicas e reparação de incidências.</p>
              </div>
           </div>
        </div>
      </motion.section>
      {/* 
        FOOTER CTA
      */}
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
           TENHA CONTROLE TOTAL <br />
           DA SUA OPERAÇÃO
          </h2>
          <p className="text-gray-400 mb-12 max-w-xl mx-auto font-sans text-base">
            Não espere o incidente acontecer. Agende uma consultoria técnica gratuita com nossos especialistas em CFTV.
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
                 Possuímos parcerias estratégicas com os fabricantes mais reconhecidos do mercado global, garantindo tecnologia de ponta e confiabilidade absoluta para o seu sistema de CFTV.
               </p>
            </div>

            {/* Logo Slider / Grid */}
            <div className="flex flex-wrap justify-center gap-16 lg:gap-20 items-center">
               {/* 
                  NOTE: You need to add these images to your public/logos folder or update the paths.
               */}
               <div className="relative w-40 h-20 opacity-100 hover:opacity-70 transition-all duration-300 flex items-center justify-center">
                  <Image src="/logos/americandynamics.webp" alt="American Dynamics" fill className="object-contain" />
               </div>
               <div className="relative w-40 h-20 opacity-100 hover:opacity-70 transition-all duration-300 flex items-center justify-center">
                  <Image src="/logos/illustra.webp" alt="Illustra" fill className="object-contain" />
               </div>
               <div className="relative w-40 h-20 opacity-100 hover:opacity-70 transition-all duration-300 flex items-center justify-center">
                  <Image src="/logos/intelbras.webp" alt="Intelbras" fill className="object-contain" />
               </div>
               <div className="relative w-40 h-20 opacity-100 hover:opacity-70 transition-all duration-300 flex items-center justify-center">
                  <Image src="/logos/hikvision.webp" alt="HIKVISION" fill className="object-contain" />
               </div>
               <div className="relative w-40 h-20 opacity-100 hover:opacity-70 transition-all duration-300 flex items-center justify-center">
                  <Image src="/logos/hanwha.webp" alt="Hanwha" fill className="object-contain" />
               </div>
               <div className="relative w-40 h-20 opacity-100 hover:opacity-70 transition-all duration-300 flex items-center justify-center">
                  <Image src="/logos/interlogix.webp" alt="Interlogix" fill className="object-contain" />
               </div>
            </div>
         </div>
      </motion.section>
    </main>
  );
}