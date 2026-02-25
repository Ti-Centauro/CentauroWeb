'use client'
import { useRef } from "react";
import {motion, useTransform, useScroll, useSpring} from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "CFTV",
    description: "Sistema de Circuito Fechado de Televisão",
    image: "/servicos/cftv.webp",
    href: "/servicos/cftv"
  },
  {
    title: "SDAI",
    description: "Sistema de Detecção e Alerta de Incêndio",
    image: "/servicos/sdai.webp",
    href: "/servicos/sdai"
  },
  {
    title: "SCA",
    description: "Sistema de Controle de Acesso",
    image: "/servicos/sca.webp",
    href: "/servicos/sca"
  },
  {
    title: "SAI",
    description: "Sistema de Alerta de Intrusão",
    image: "/servicos/sai.webp",
    href: "/servicos/sai"
  },
  {
    title: "SON",
    description: "Sistema de Sonorização",
    image: "/servicos/son.webp",
    href: "/servicos/son"
  },
  {
    title: "REDES",
    description: "Cabeamento Estruturado",
    image: "/servicos/cabeamento.webp",
    href: "/servicos/cabeamento-estruturado"
  },
];

export default function Servicos() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const x = useTransform(smoothProgress, [0, 1], ["-1%", "-50%"]);

  return (
    <>
      {/* Mobile: Scroll horizontal simples com toque */}
      <section id="Servicos" className="md:hidden bg-neutral-200/50 shadow-lg py-12">
        <div className="px-6 mb-8">
          <h2 className="text-3xl font-black font-display text-black tracking-tight leading-none uppercase">
            Nossos <span className="text-red-800">Serviços</span>
          </h2>
        </div>
        <div
          className="flex gap-4 px-6 overflow-x-auto pb-6 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        >
          <style jsx>{`
            div::-webkit-scrollbar { display: none; }
          `}</style>
          {services.map((service, index) => (
            <div key={index} className="snap-start">
              <Link
                href={service.href}
                className="group relative h-[60vh] w-[85vw] overflow-hidden rounded-3xl bg-neutral-800 flex-shrink-0 cursor-pointer block"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="relative h-full flex flex-col justify-end p-8 z-10">
                  <h3 className="text-4xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-lg text-gray-300">{service.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Desktop: Scroll-driven parallax animation (original) */}
      <section ref={targetRef} className="relative h-[250vh] bg-neutral-200/50 shadow-lg hidden md:block">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="absolute top-20 left-16 z-20">
            <h2 className="text-5xl font-black font-display text-black tracking-tight leading-none mb-8 uppercase">
              Nossos <span className="text-red-800">Serviços</span>
            </h2>
          </div>
          <motion.div style={{ x }} className="flex gap-8 px-16 items-center h-full">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group relative h-[60vh] w-[30vw] min-w-[300px] max-w-[450px] overflow-hidden rounded-3xl bg-neutral-800 flex-shrink-0 cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-600 group-hover:scale-110 opacity-50 group-hover:opacity-40"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="relative h-full flex flex-col justify-end p-8 z-10">
                  <h3 className="text-3xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}