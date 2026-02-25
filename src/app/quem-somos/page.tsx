'use client';

import Link from "next/link";
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

export default function QuemSomos() {
  return (
    <main className="w-full max-w-[1200px] mx-auto px-6 lg:px-8 pt-24 pb-32 space-y-32 bg-white">
      {/* SECTION 1: HERO */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="relative pt-12 lg:pt-20 border-b border-gray-100 pb-20"
      >
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12">
          <div className="w-full">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-gray-500 text-sm font-medium mb-8 uppercase tracking-widest font-sans">
              <Link href="/" className="hover:text-red-700 transition-colors">Home</Link>
              <span className="text-red-700">/</span>
              <span className="text-red-700">Quem Somos</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-8xl font-black font-display tracking-tighter text-black leading-[0.9] uppercase">
              INOVAÇÃO <br />
              <span className="text-red-700 italic font-serif font-bold">COMPROMISSO</span> <br />
              FUTURO.
            </h1>

            {/* Subtitle */}
            <div className="mt-12 max-w-xl">
              <p className="text-xl lg:text-2xl text-gray-800 leading-relaxed font-sans font-light">
                Construindo o amanhã com solidez e parcerias duradouras. Desde o primeiro dia, nossa essência é transformar desafios complexos em soluções simples e elegantes.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SECTION 2: STATS */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16"
      >
        
        {/* Card 1 */}
        <motion.div variants={fadeInUp} className="space-y-4 border-t-2 border-red-700 pt-6">
          <h3 className="text-6xl font-bold font-display text-black">
            24<span className="text-3xl text-red-700 align-top font-bold">/7</span>
          </h3>
          <h4 className="text-lg font-semibold uppercase tracking-wider text-black font-sans">Suporte Dedicado</h4>
          <p className="text-gray-600 leading-relaxed text-sm font-sans font-normal">
            Nossa equipe de especialistas está disponível a qualquer hora do dia ou da noite. Entendemos que o mundo corporativo não para, e nossa infraestrutura de suporte é desenhada para garantir continuidade operacional absoluta, minimizando riscos e maximizando a eficiência de seus processos críticos.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div variants={fadeInUp} className="space-y-4 border-t-2 border-gray-200 pt-6 group hover:border-red-700 transition-colors duration-300">
          <h3 className="text-6xl font-bold font-display text-black">
            300<span className="text-3xl text-red-700 align-top font-bold">+</span>
          </h3>
          <h4 className="text-lg font-semibold uppercase tracking-wider text-black font-sans">Projetos Executados</h4>
          <p className="text-gray-600 leading-relaxed text-sm font-sans font-normal">
            Um portfólio robusto que atravessa diversos setores da indústria. Cada número representa uma parceria de sucesso, onde aplicamos nossa metodologia proprietária para entregar resultados mensuráveis. De startups a corporações multinacionais, nossa pegada é sinônimo de excelência e transformação digital.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div variants={fadeInUp} className="space-y-4 border-t-2 border-gray-200 pt-6 group hover:border-red-700 transition-colors duration-300">
          <h3 className="text-6xl font-bold font-display text-black">
            20<span className="text-3xl text-red-700 align-top font-bold">+</span>
          </h3>
          <h4 className="text-lg font-semibold uppercase tracking-wider text-black font-sans">Anos de Experiência</h4>
          <p className="text-gray-600 leading-relaxed text-sm font-sans font-normal">
            Duas décadas de aprendizado contínuo e adaptação. Sobrevivemos e prosperamos através de mudanças tecnológicas sísmicas, sempre à frente da curva. Nossa longevidade é testemunho de nossa capacidade de inovar e de nos mantermos relevantes em um mercado volátil e extremamente competitivo.
          </p>
        </motion.div>
      </motion.section>

      {/* SECTION 3: HISTORY */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column (Title) */}
          <div className="lg:col-span-4">
            <h2 className="text-4xl lg:text-5xl font-black font-display text-black tracking-tight leading-none mb-8 uppercase">
              NOSSA<br />HISTÓRIA<br /><span className="text-red-700">& LEGADO</span>
            </h2>
            <div className="w-16 h-1 bg-black mb-8"></div>
            <p className="text-lg font-serif italic font-bold text-gray-500 leading-relaxed">
              "Não somos apenas provedores de serviço. Somos arquitetos de soluções que moldam o futuro dos negócios."
            </p>
          </div>

          {/* Right Column (Text) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 text-gray-700 leading-relaxed text-justify font-sans font-normal">
            <div className="space-y-6">
              <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-red-700 first-letter:float-left first-letter:mr-3 first-letter:mt-[-6px]">
                Somos a Centauro Engenharia, uma empresa brasileira que atua como integradora de soluções e serviços tecnológicos de ponta. Com mais de uma década de experiência, acreditamos que o sucesso não reside em estruturas gigantescas, mas no cuidado com os detalhes. Cada projeto é tratado com apreço máximo, sendo encarado como um desafio único que exige planejamento minucioso e uma execução pautada pela excelência técnica em todas as etapas.
              </p>
              <p>
                Ao longo de nossa trajetória, aprendemos que o maior ativo de uma organização é o potencial humano e o conhecimento técnico acumulado. Nossa equipe, composta por mais de 90 colaboradores engajados, baseia sua atuação em pilares fundamentais como a ética, a integridade e a transparência. É através desses valores que honramos a confiança de nossos clientes, garantindo um ambiente de trabalho profissional, seguro e altamente produtivo.
              </p>
            </div>
            <div className="space-y-6">
              <p>
                Projetamos com dedicação e executamos com inteligência para ir muito além da simples oferta de equipamentos ou serviços básicos. A Centauro escolheu o caminho da inovação personalizada, utilizando ideias criativas para resolver problemas reais de forma estratégica. Nossos profissionais são constantemente treinados para entregar soluções que se adequem à realidade de cada parceiro, sempre buscando superar as expectativas mais exigentes do mercado.
              </p>
              <p>
                Olhamos para o futuro com o entusiasmo de quem sabe que a inovação é um processo contínuo de evolução e descoberta constante. Nosso compromisso é ser o alicerce tecnológico que viabiliza o crescimento dos nossos clientes, transformando desafios complexos em resultados sólidos. Somos parceiros dedicados a construir relações de longo prazo, garantindo que a tecnologia esteja sempre a serviço do sucesso e da segurança de todos os seus projetos.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SECTION 4: MISSION & VISION */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="py-16 bg-white  px-0"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 relative">
          
          {/* Vertical Divider (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white transform -translate-x-1/2"></div>
          
          {/* Mission */}
          <div className="flex flex-col gap-6 p-4">
            <h3 className="text-4xl font-black font-display text-black uppercase tracking-tight">Nossa Missão</h3>
            <div className="w-12 h-1 bg-red-700"></div>
            <p className="text-gray-800 leading-relaxed text-lg font-serif font-bold italic">
              "Prover soluções corporativas de alta qualidade, compassivas e tecnológicas que melhorem o bem-estar, independência e qualidade de vida."
            </p>
            <p className="text-gray-600 leading-relaxed text-base text-justify font-sans font-normal">
              Buscamos incessantemente a excelência através de um cuidado personalizado, mantendo o mais alto nível de profissionalismo e respeito em cada interação. Nossa missão é ser o parceiro invisível que torna o sucesso visível, atuando sempre com a precisão técnica e a empatia de um aliado de longa data.
            </p>
          </div>

          {/* Vision */}
          <div className="flex flex-col gap-6 p-4">
            <h3 className="text-4xl font-black font-display text-black uppercase tracking-tight">Nossa Visão</h3>
            <div className="w-12 h-1 bg-red-700"></div>
            <p className="text-gray-800 leading-relaxed text-lg font-serif font-bold italic">
              "Ser o líder incontestável em tecnologia corporativa na região, reconhecido não apenas pela inovação de nossas soluções, mas pelo atendimento humano."
            </p>
            <p className="text-gray-600 leading-relaxed text-base text-justify font-sans font-normal">
              Visualizamos um futuro onde a tecnologia remove barreiras para o potencial humano, provendo suporte focado no cliente para uma vida digna e independente. Queremos ser a referência de como a ética e a tecnologia caminham juntas para construir um mercado mais justo, eficiente e focado nas pessoas.
            </p>
          </div>

        </div>
      </motion.section>
    </main>
  );
}
