"use client";

import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  title?: string;
  subtitle?: string;
  image?: string;
  ctaPrimary?: {
    text: string;
    href: string;
  };
  ctaSecondary?: {
    text: string;
    href: string;
  };
}

export default function Hero({
  title = "Centauro Engenharia e Informática",
  subtitle = "Oferecemos soluções inteligentes adequadas para cada necessidade.",
  image = "/hero.png",
  ctaPrimary = {
    text: "Serviços",
    href: "/servicos",
  },
  ctaSecondary,
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Camada de Fundo (z-0) */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt="Imagem de fundo da seção Hero"
          fill
          priority
          quality={90}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Camada de Conteúdo (z-10) */}
      <div className="relative z-10 w-full">
        {/* Bloco Branco "Colado na Parede" */}
        {/* max-w-2xl: Define a largura do bloco */}
        {/* rounded-r-[3rem]: Arredonda muito apenas a direita */}
        <div className="bg-slate-50 max-w-2xl p-7 rounded-r-[3rem] shadow-2xl animate-fade-in-right">
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-gray-500 mb-5 leading-relaxed max-w-md">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={ctaPrimary.href}
              className="bg-red-700 hover:bg-red-800 text-white px-8 py-3.5 rounded-full font-bold text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-900/30"
            >
              {ctaPrimary.text}
            </Link>

            {ctaSecondary && (
              <Link
                href={ctaSecondary.href}
                className="bg-transparent hover:bg-gray-50 text-gray-700 px-8 py-3.5 rounded-full font-bold text-center border-2 border-gray-200 transition-all duration-300 hover:border-gray-300"
              >
                {ctaSecondary.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
