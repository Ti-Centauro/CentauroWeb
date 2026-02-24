'use client';
import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { motion, Variants, AnimatePresence } from "framer-motion";
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

import { CLIENTES_DADOS, CATEGORIAS } from "@/data/clientes";

export default function Clientes() {
  const [filtroAtivo, setFiltroAtivo] = useState("Todos");
  const clientesFiltrados = CLIENTES_DADOS.filter(cliente => 
    filtroAtivo === "Todos" ? true : cliente.categoria === filtroAtivo
  );
  return (
     <main className="w-full bg-white pb-32">
      
      {/* SEÇÃO 1: HERO ALINHADO COM QUEM SOMOS */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        // Classes exatas que você pediu para igualar a altura
        className="w-full max-w-[1200px] mx-auto px-6 lg:px-8 pt-24 pb-22 space-y-32 bg-white"
      >
        {/* Div interno para simular o padding extra que existe na página Quem Somos */}
        <div className="relative pt-12 lg:pt-20 border-b border-gray-100">
            <div className="flex flex-col lg:flex-row items-end justify-between gap-12">
            <div className="w-full">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-gray-500 text-sm font-medium mb-8 uppercase tracking-widest font-sans">
                <Link href="/" className="hover:text-red-700 transition-colors">Home</Link>
                <span className="text-red-700">/</span>
                <span className="text-red-700">Clientes</span>
                </div>
                {/* Título Principal */}
                <h1 className="text-6xl lg:text-8xl font-black font-display tracking-tighter text-black leading-[0.9] uppercase">
                NOSSOS <br />
                <span className="text-red-700 italic font-serif font-bold">CLIENTES.</span>
                </h1>
                {/* Subtítulo */}
                <div className="mt-12 max-w-xl">
                <span className="text-xl lg:text-2xl text-gray-800 leading-relaxed font-sans font-light">
                    Conheça os clientes que confiam na
                </span>{" "}
                <span className="text-xl lg:text-2xl text-red-700 leading-relaxed font-sans font-bold">
                    Centauro.
                </span>
                </div>
            </div>
            </div>
        </div>
      </motion.section>
      {/* SEÇÃO 2: BARRA VERMELHA DE FILTROS */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >

      <section className="w-full bg-red-800">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            
            {/* Menu de Navegação Horizontal COMPACTO */}
            <div className="flex flex-nowrap justify-between md:justify-center items-center gap-4 py-6 overflow-x-auto whitespace-nowrap scrollbar-hide">
                {CATEGORIAS.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setFiltroAtivo(cat)}
                    // Font Montserrat (font-display), Bold (font-bold), Uppercase, 13-14px (text-sm é 14px), tracking 0.05em (tracking-wider)
                    className={`font-display font-bold uppercase tracking-wider text-[10px] md:text-[11px] transition-all duration-300 relative pb-1 flex-shrink-0
                    ${filtroAtivo === cat 
                        ? 'text-white after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-white' // Ativo
                        : 'text-white/70 hover:text-white' // Inativo
                    }
                    `}
                >
                    {cat}
                </button>
                ))}
            </div>
        </div>
      </section>
      </motion.section>
      {/* SEÇÃO 3: GRID DE CLIENTES */}
      {/* SEÇÃO 3: GRID DE CLIENTES */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="w-full max-w-[1400px] mx-auto px-6 lg:px-12"
      >
          
        {/* Grid com bordas estilo tabela */}
        {/* Grid com bordas estilo tabela */}
        <div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-t border-l border-gray-100"
        >
        <AnimatePresence mode='popLayout'>
            {clientesFiltrados.map((cliente) => (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                key={cliente.id}
                className="group relative aspect-square bg-white border-r border-b border-gray-50 flex items-center justify-center p-8 hover:bg-gray-50 transition-colors"
            >
                <div className="relative w-32 h-32 flex items-center justify-center">
                    <Image 
                      src={cliente.imagem} 
                      alt={cliente.nome}
                      fill
                      className="object-contain p-3 transition-transform duration-300 group-hover:scale-110"
                    />
                </div>
                
                <span className="absolute bottom-4 text-[10px] text-gray-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    {cliente.nome}
                </span>
            </motion.div>
            ))}
        </AnimatePresence>
        </div>
        {clientesFiltrados.length === 0 && (
            <div className="py-20 text-center text-gray-400">
                <p>Nenhum cliente encontrado.</p>
            </div>
        )}
      </motion.section>
    </main> 
  );
}