'use client';

import Link from "next/link";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Clientes() {
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
              <span className="text-red-700">Clientes</span>
            </div>

            {/* Título Principal */}
            <h1 className="text-6xl lg:text-8xl font-black font-display tracking-tighter text-black leading-[0.9] uppercase">
              NOSSOS <br />
              <span className="text-red-700 italic font-serif font-bold">CLIENTES.</span>
            </h1>

            {/* Subtítulo */}
            <div className="mt-12 max-w-xl">
              <p className="text-xl lg:text-2xl text-gray-800 leading-relaxed font-sans font-light">
                Conheça os clientes que confiam em nós para transformar suas ideias em realidade.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </main> 
  );
}