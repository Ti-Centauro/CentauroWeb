"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PARCEIROS_POR_SERVICO, type ServicoComParceiros } from "@/data/parceiros";

type Props = {
  servico: ServicoComParceiros;
  descricao: string;
};

export default function Parceiros({ servico, descricao }: Props) {
  const marcas = PARCEIROS_POR_SERVICO[servico];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-24 bg-white border-t border-gray-100"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black font-display uppercase tracking-tight text-red-800 mb-4">
            Parceiros
          </h2>
          <p className="text-gray-900 max-w-2xl mx-auto font-sans text-lg">
            {descricao}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-16 lg:gap-20 items-center">
          {marcas.map((marca) => (
            <div
              key={marca.imagem}
              className="relative w-40 h-20 opacity-100 hover:opacity-70 transition-all duration-300 flex items-center justify-center"
            >
              <Image src={marca.imagem} alt={marca.nome} fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
