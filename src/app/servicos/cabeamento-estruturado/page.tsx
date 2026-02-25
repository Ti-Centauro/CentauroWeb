'use client';
import React from "react";
import { 
  Network, 
  Server, 
  Wifi, 
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

export default function CabeamentoLandingPage() {
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
        <div className="container mx-auto px-6 grid lg:grid-cols-[60%_40%] gap-3 items-center">
          <div className="space-y-8">
            <p className="text-xs font-bold tracking-[0.2em] text-red-700 uppercase font-sans">
              Infraestrutura de TI
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-black font-display text-black leading-[0.9] tracking-tighter uppercase">
              CABEAMENTO <br />
              <div className="flex flex-col">
                <span className="text-red-800">ESTRUTURADO</span>
                <span className="text-black">E DADOS</span>
              </div>
            </h1>
            <p className="text-gray-600 max-w-md text-lg leading-relaxed border-l-4 border-red-700 pl-6 font-sans">
              Conectividade de alta performance e organização para sua empresa. Redes certificadas que garantem velocidade e estabilidade.
            </p>
          </div>
          {/* Image Container */}
          <div className="relative h-[400px] lg:h-[600px] w-full bg-gray-50 border border-gray-100">
             <Image
                src="/cabeamento_pagina.webp" 
                alt="Cabeamento Estruturado"
                fill
                className="object-cover opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
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
            Rede <br/> Instável
          </h3>
          
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-sans font-light">
            <p>
              Uma infraestrutura de rede desorganizada causa lentidão, desconexões frequentes e dificuldade de manutenção, impactando diretamente a produtividade da equipe.
            </p>
            <p>
              Cabos emaranhados e sem identificação tornam qualquer reparo um pesadelo, aumentando o tempo de inatividade da operação.
            </p>
          </div>
        </div>

        {/* SOLUTION (Right) */}
        <div className="bg-white text-black p-12 lg:p-24 flex flex-col justify-start border-l border-gray-100 lg:h-full">
          <h2 className="text-sm font-black text-gray-900 mb-6 tracking-widest uppercase font-sans">
            A Solução Centauro
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif italic text-red-700 mb-8 font-bold">
            Organização Total
          </h3>
          
          <p className="text-gray-600 mb-10 text-lg font-sans font-light">
            Além de elaborarmos projetos de redes locais, oferecemos o apoio necessário para a implantação de novos ambientes, dimensionando recursos, equipamentos e serviços:
          </p>
          <ul className="space-y-6">
            {[
              "Projetos de Elétrica e CFTV Integrados",
              "Sonorização de Ambientes Corporativos",
              "Telefonia VoIP e PABX",
              "Controle de Acesso de Visitantes e Ponto"
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
        SERVICES 
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
            <h2 className="text-4xl font-black font-display text-black uppercase tracking-tight">Nossos Serviços</h2>
            <div className="w-16 h-1 bg-red-700 mx-auto mt-6" />
            <p className="text-gray-600 mt-8 max-w-3xl mx-auto font-sans text-lg">
              Estamos habituados a trabalhar com bancos, seguradoras, hospitais, supermercados, call-centers, escritórios inteligentes, complexos industriais e outros grandes grupos empresariais.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="bg-white p-8 lg:p-10 border border-gray-200 hover:border-red-700 transition-colors duration-300 group h-full">
              <div className="w-12 h-12 bg-red-50 flex items-center justify-center mb-6 group-hover:bg-red-700 transition-colors">
                <Network className="w-6 h-6 text-red-700 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold font-display mb-6 uppercase text-black">Redes Estruturadas</h4>
              <ul className="text-gray-500 text-sm leading-relaxed font-sans list-disc list-inside space-y-2">
                <li>Cabeamento de dados, voz e VoIP (CAT5e, CAT6, CAT7)</li>
                <li>Infraestrutura seca completa (eletrocalhas, dutos, piso elevado)</li>
                <li>Reestruturação e reinstalação de redes</li>
                <li>Contratos de manutenção e suporte</li>
                <li>Projetos executivos, Site Survey e As-Built (AutoCAD)</li>
                <li>Certificação de pontos (Fluke Networks)</li>
                <li>Gestão de projetos especiais de Telecom</li>
              </ul>
            </div>
            <div className="bg-white p-8 lg:p-10 border border-gray-200 hover:border-red-700 transition-colors duration-300 group h-full">
              <div className="w-12 h-12 bg-red-50 flex items-center justify-center mb-6 group-hover:bg-red-700 transition-colors">
                <Server className="w-6 h-6 text-red-700 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold font-display mb-6 uppercase text-black">Fibra Óptica</h4>
              <ul className="text-gray-500 text-sm leading-relaxed font-sans list-disc list-inside space-y-2">
                <li>Lançamento, fusão e interligação de sites</li>
                <li>Montagem de DIO e certificação de links</li>
                <li>Medições com equipamentos próprios (OTDR)</li>
                <li>Manutenção preventiva e corretiva em backbones</li>
              </ul>
            </div>
            <div className="bg-white p-8 lg:p-10 border border-gray-200 hover:border-red-700 transition-colors duration-300 group h-full">
              <div className="w-12 h-12 bg-red-50 flex items-center justify-center mb-6 group-hover:bg-red-700 transition-colors">
                <Wifi className="w-6 h-6 text-red-700 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold font-display mb-6 uppercase text-black">Redes Sem Fio</h4>
              <ul className="text-gray-500 text-sm leading-relaxed font-sans list-disc list-inside space-y-2">
                <li>Site Survey e planejamento de cobertura</li>
                <li>Instalação de Wi-Fi Corporativo</li>
                <li>Otimização de performance e segurança</li>
                <li>Integração com rede cabeada existente</li>
              </ul>
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
                 <h3 className="text-xl font-bold font-display mb-4 uppercase text-black">Projeto</h3>
                 <p className="text-gray-500 text-sm font-sans">Dimensionamento de pontos, rotas de cabos e localização de racks.</p>
              </div>
              <div className="border-t-2 border-gray-200 pt-6 group hover:border-red-700 transition-colors duration-300 relative">
                 <span className="text-8xl font-black text-gray-100 absolute -top-8 right-0 -z-10 font-display select-none">02</span>
                 <h3 className="text-xl font-bold font-display mb-4 uppercase text-black">Lançamento</h3>
                 <p className="text-gray-500 text-sm font-sans">Passagem de cabos UTP e Fibras seguindo normas de distanciamento e ocupação.</p>
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
           CONECTE SUA EMPRESA <br />
           COM O FUTURO
          </h2>
          <p className="text-gray-400 mb-12 max-w-xl mx-auto font-sans text-base">
            Uma rede estável é a base para o crescimento. Solicite um orçamento de cabeamento estruturado hoje mesmo.
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
                 Utilizamos materiais de primeira linha das principais marcas do mercado.
               </p>
            </div>

            {/* Logo Slider / Grid */}
            <div className="flex flex-wrap justify-center gap-20 lg:gap-32 items-center max-w-5xl mx-auto">
               <div className="relative w-40 h-20 opacity-100 hover:opacity-70 transition-all duration-300 flex items-center justify-center">
                  <Image src="/logos/furukawaOK.webp" alt="Furukawa" fill className="object-contain" />
               </div>
               <div className="relative w-40 h-20 opacity-100 hover:opacity-70 transition-all duration-300 flex items-center justify-center">
                  <Image src="/logos/ciscoOK.webp" alt="Cisco" fill className="object-contain" />
               </div>
            </div>
         </div>
      </motion.section>
    </main>
  );
}
