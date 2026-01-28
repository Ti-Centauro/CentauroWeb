'use client'
import { useRef } from "react";
import {motion, useTransform, useScroll, useSpring} from "framer-motion";



const services = [
  {
    title: "CFTV",
    description: "Sistema de Circuito Fechado de Televisão",
    image: "/servicos/cftv.png",
  },
  {
    title: "SDAI",
    description: "Sistema de Detecção e Alerta de Incêndio",
    image: "/servicos/sdai.png",
  },
  {
    title: "SCA",
    description: "Sistema de Controle de Acesso",
    image: "/servicos/sca.png",
  },
  {
    title: "SAI",
    description: "Sistema de Alerta de Intrusão",
    image: "/servicos/sai.png",
  },
  {
    title: "SON",
    description: "Sistema de Sonorização",
    image: "/servicos/son.png",
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
    // Container principal: Define a altura "fantasma" para rolar (300vh)
    <section ref={targetRef} className="relative h-[250vh] bg-neutral-200/50 shadow-lg">
      
      {/* Container visual: Fica "preso" na tela enquanto rolamos */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Título Fixo (opcional, para dar contexto) */}
        <div className="absolute top-10 left-8 z-20 md:top-20 md:left-20">
            <h2 className="text-4xl lg:text-5xl font-black font-display text-black tracking-tight leading-none mb-8 uppercase">
              Nossos <span className="text-red-800">Serviços</span>
            </h2>
        </div>
        {/* A Lista de Cards que se move horizontalmente */}
        {/* Usamos motion.div e passamos o estilo 'x' calculado antes */}
        <motion.div style={{ x }} className="flex gap-8 px-8 md:px-20 pt-32">
          
          {/* Mapeamos os dados para criar os cards */}
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="group relative h-[450px] w-[350px] md:h-[550px] md:w-[450px] overflow-hidden rounded-3xl bg-neutral-800 flex-shrink-0"
              >
                {/* Imagem de Fundo */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-600 group-hover:scale-110 opacity-50 group-hover:opacity-40"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                
                {/* Conteúdo do Card */}
                <div className="relative h-full flex flex-col justify-end p-8 z-10">
                  <h3 className="text-3xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}