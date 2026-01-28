"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Newsreader } from "next/font/google";

const newsreader = Newsreader({ subsets: ["latin"] });

// 1. Dados dos Depoimentos
const testimonials = [
  {
    quote: "Nosso muito obrigado e Parabéns, pelo trabalho realizado por Toda a Equipe da Centauro, que neste caminhar teve tanto compromentimento e foi incasável na busca de soluções, juntamente com nossas Equipes.",
    company: "GLOBO",
    logo: "/logos/globo1.png"
  },
  {
    quote: "Agradecemos o atendimento que proporcionou resolução rápida na demanda de trabalho da Petrobras junto ao Ministério das Minas e Energia. Sabemos que, o atendimento foi realizado em caráter excepcional, por isso agradecemos o pronto atendimento, que evitou constragimentos para a Companhia",
    company: "PETROBRAS",
    logo: "/logos/petrobras.png"
  },
  {
    quote: "São profissionais como vocês que fazem nosso trabalho ser mais fácil, obrigado.",
    company: "LOGUM",
    logo: "/logos/logologum.png"
  },
  {
    quote: "Segue em anexo o elogio ao colaboradro (...) em relação à sua destacada atuação corroborativa para o bom êxito da 34ª Reunião do CNOMP. Aproveito também para elgoiar a atuação de toda a equipe.",
    company: "MPRJ",
    logo: "/logos/mprj.png"
  },
   {
    quote: "Excelente a execução e qualidade do serviço. Toda documentação estava ok",
    company: "NESTLE",
    logo: "/logos/nestle.png"
  },
  {
    quote: "Nós da Facilities, queremos agradecer o bom serviço que os colaboradores (...) vêm realizando no prédio. Atuando com prontidão e agilidade nos atendimentos prestados",
    company: "SUBSEA7",
    logo: "/logos/subsea7.png"
  },
  
];

export default function Depoimentos() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para avançar
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Função para voltar
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play: Muda a cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="bg-white py-20 px-8 md:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          
          {/* ESQUERDA: Título */}
          <div>
            <h2 className={`${newsreader.className} text-4xl md:text-5xl font-black text-red-800 uppercase leading-tight`}>
              Depoimentos <br /> que incentivam <br /> a Centauro
            </h2>
          </div>

          {/* DIREITA: Conteúdo do Depoimento */}
          <div className="bg-gray-100 p-10 md:p-4 rounded-[2rem] min-h-[450px] flex flex-col justify-center relative shadow-sm overflow-hidden">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
               
                <div className="relative z-10">
                  <p className="text-xl md:text-2xl italic text-gray-700 leading-relaxed mb-8">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  
                  <div className="flex flex-col gap-4">
                    <strong className="text-red-800 text-lg uppercase tracking-wider font-bold">
                      — {testimonials[currentIndex].company}
                    </strong>
                    
                    <div className="h-12 w-32 relative">
                      <Image 
                        src={testimonials[currentIndex].logo}
                        alt={testimonials[currentIndex].company}
                        fill
                        className="object-contain object-left  transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Botoes de Navegação (Setas) */}
            <div className="flex gap-4 mt-12">
              <button 
                onClick={prevSlide}
                className="p-3 border border-gray-300 rounded-full hover:bg-white hover:border-red-800 transition-all text-gray-600 hover:text-red-800"
                aria-label="Anterior"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>
              <button 
                onClick={nextSlide}
                className="p-3 bg-red-800 text-white rounded-full hover:bg-red-900 transition-all shadow-lg px-6"
                aria-label="Próximo"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}