"use client";
import Image from "next/image"
import { motion } from "framer-motion"

export default function Confianca(){
  return(
    <section id="Confianca" className="scroll-mt-24 relative py-20 bg-slate-100 overflow-hidden">
        <div className="absolute top-0 left-0 w-full lg:w-[40%] h-full bg-red-800 z-0"></div>

    <div className="w-full px-8 md:px-16 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[350px] lg:h-[420px] w-full rounded-3xl overflow-hidden shadow-2xl"
          >
             <Image
              src="/img_confianca.webp"
              alt="Professional engineer inspecting equipment"
              fill
              className="object-cover"
            />
          </motion.div>

         <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
         >
            <h2 className="text-2xl md:text-4xl font-display font-bold text-white lg:text-gray-900 leading-tight">Mais de <span className="text-black lg:text-red-800">R$ 5,5 bilhões</span> em patrimônios já contam com as soluções da Centauro.
            </h2>
      <br />
            <p className="text-white/90 lg:text-gray-800 text-lg md:text-2xl leading-relaxed font-display font-light">
              Nossa expertise garante que sua infraestrutura esteja sempre operando com máxima eficiência, segurança e retorno sobre o investimento.
            </p>

        </motion.div>

    </div>

    </div>
    </section>
  );
}