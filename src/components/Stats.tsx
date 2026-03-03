"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

// Seus dados (removi o duplicado que tinha na lista)
const statsData = [
  { value: 10000, label: "Pontos de Rede de Dados" },
  { value: 15000, label: "Pontos de Câmeras CFTV" },
  { value: 200, label: "KM de Cabos Ópticos" },
  { value: 300, label: "Portas de Controle de Acesso" },
  { value: 9500, label: "Pontos de Det. de Incêndio" },
];

// A Mágica da Animação
function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Parte 1: Detecta quando aparece na tela
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Para de observar depois que viu
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
  }, []);

  // Parte 2: Faz a contagem matemática
  useEffect(() => {
    if (!isVisible) return; // Só conta se estiver visível

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Efeito "eaeseOut": começa rápido e desacelera no final
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  return { count, elementRef };
}

// O Componente Visual
export default function Stats() {
  return (
    <section className="bg-gray-50 py-10">
      <div className="w-full px-8 md:px-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          
          {statsData.map((item, index) => {
            // Chamamos a mágica para cada item!
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const { count, elementRef } = useCountUp(item.value);

            const isLastOdd = statsData.length % 2 !== 0 && index === statsData.length - 1;

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                ref={elementRef} 
                className={`flex flex-col items-center text-center group ${isLastOdd ? "col-span-2 md:col-span-1" : ""}`}
              >
                <span className="text-3xl md:text-4xl font-light text-gray-800 tabular-nums">
                  + {count.toLocaleString("pt-BR")}
                </span>
                {/* Tracinho que fica vermelho quando passa o mouse */}
                <div className="w-8 h-0.5 bg-gray-400 my-4 group-hover:w-35 group-hover:bg-red-700 transition-all duration-300" />
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                  {item.label}
                </span>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}