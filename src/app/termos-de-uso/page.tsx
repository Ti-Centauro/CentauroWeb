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

export default function TermosDeUso() {
  return (
    <main className="w-full max-w-[1200px] mx-auto px-6 lg:px-8 pt-24 pb-32 space-y-16 bg-white">
      {/* HEADER */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="relative pt-12 lg:pt-16 border-b border-gray-200 pb-10"
      >
        <div className="w-full">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-gray-500 text-sm font-medium mb-6 uppercase tracking-widest font-sans">
            <Link href="/" className="hover:text-red-700 transition-colors">Home</Link>
            <span className="text-red-700">/</span>
            <span className="text-red-700">Termos de Uso</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl lg:text-4xl font-bold text-black font-sans tracking-tight">
            Termos de Uso
          </h1>
          <div className="w-16 h-1 bg-red-700 mt-4"></div>

          {/* Subtitle */}
          <p className="mt-6 text-base lg:text-lg text-gray-600 leading-relaxed font-sans max-w-2xl">
            Ao acessar o site da Centauro Engenharia, você concorda em cumprir estes termos de serviço e todas as leis e regulamentos aplicáveis.
          </p>
          <p className="mt-2 text-sm text-gray-400 font-sans">
            Última atualização: 24 de Fevereiro de 2026
          </p>
        </div>
      </motion.section>

      {/* CONTEÚDO DOS TERMOS */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="space-y-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <div className="sticky top-28 space-y-3">
              <h3 className="text-sm font-bold text-red-700 uppercase tracking-widest mb-4 font-sans">Índice</h3>
              <nav className="space-y-2">
                {[
                  { label: "Termos Gerais", href: "#termos" },
                  { label: "Uso de Licença", href: "#licenca" },
                  { label: "Isenção de Responsabilidade", href: "#isencao" },
                  { label: "Limitações", href: "#limitacoes" },
                  { label: "Precisão dos Materiais", href: "#precisao" },
                  { label: "Links", href: "#links" },
                  { label: "Modificações", href: "#modificacoes" },
                  { label: "Lei Aplicável", href: "#lei" },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="block text-sm text-gray-600 hover:text-red-700 hover:font-semibold transition-colors font-sans py-1 border-l-2 border-transparent hover:border-red-700 pl-3"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-9 space-y-12 text-gray-700 leading-relaxed font-sans font-normal">
            {/* 1. Termos */}
            <div id="termos" className="scroll-mt-28">
              <h2 className="text-2xl font-black font-display text-black uppercase tracking-tight mb-4">
                1. Termos <span className="text-red-700">Gerais</span>
              </h2>
              <div className="w-12 h-1 bg-red-700 mb-6"></div>
              <p className="text-base text-justify">
                Ao acessar o site da Centauro Engenharia, você concorda em cumprir estes termos de serviço, todas as leis 
                e regulamentos aplicáveis, e reconhece que é responsável pelo cumprimento de todas as leis locais aplicáveis. 
                Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais 
                contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
              </p>
            </div>

            {/* 2. Uso de Licença */}
            <div id="licenca" className="scroll-mt-28">
              <h2 className="text-2xl font-black font-display text-black uppercase tracking-tight mb-4">
                2. Uso de <span className="text-red-700">Licença</span>
              </h2>
              <div className="w-12 h-1 bg-red-700 mb-6"></div>
              <p className="text-base text-justify mb-4">
                É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no 
                site da Centauro Engenharia, apenas para visualização transitória pessoal e não comercial. Esta é a concessão 
                de uma licença, não uma transferência de título e, sob esta licença, você não pode:
              </p>
              <ul className="space-y-3 text-base mb-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-700 font-bold mt-0.5">•</span>
                  <span>Modificar ou copiar os materiais;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-700 font-bold mt-0.5">•</span>
                  <span>Usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-700 font-bold mt-0.5">•</span>
                  <span>Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-700 font-bold mt-0.5">•</span>
                  <span>Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-700 font-bold mt-0.5">•</span>
                  <span>Transferir os materiais para outra pessoa ou &quot;espelhar&quot; os materiais em qualquer outro servidor.</span>
                </li>
              </ul>
              <p className="text-base text-justify">
                Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida 
                pela Centauro Engenharia a qualquer momento. Ao encerrar a visualização desses materiais ou após o término 
                desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrônico ou impresso.
              </p>
            </div>

            {/* 3. Isenção de Responsabilidade */}
            <div id="isencao" className="scroll-mt-28">
              <h2 className="text-2xl font-black font-display text-black uppercase tracking-tight mb-4">
                3. Isenção de <span className="text-red-700">Responsabilidade</span>
              </h2>
              <div className="w-12 h-1 bg-red-700 mb-6"></div>
              <p className="text-base text-justify mb-4">
                Os materiais no site da Centauro Engenharia são fornecidos &quot;como estão&quot;. A Centauro Engenharia não oferece 
                garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, 
                sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não 
                violação de propriedade intelectual ou outra violação de direitos.
              </p>
              <p className="text-base text-justify">
                Além disso, a Centauro Engenharia não garante ou faz qualquer representação relativa à precisão, aos 
                resultados prováveis ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionada 
                a esses materiais ou em sites vinculados a este site.
              </p>
            </div>

            {/* 4. Limitações */}
            <div id="limitacoes" className="scroll-mt-28">
              <h2 className="text-2xl font-black font-display text-black uppercase tracking-tight mb-4">
                4. <span className="text-red-700">Limitações</span>
              </h2>
              <div className="w-12 h-1 bg-red-700 mb-6"></div>
              <p className="text-base text-justify">
                Em nenhum caso a Centauro Engenharia ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, 
                sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso 
                ou da incapacidade de usar os materiais no site, mesmo que a Centauro Engenharia ou um representante 
                autorizado tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas 
                jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos 
                consequentes ou incidentais, essas limitações podem não se aplicar a você.
              </p>
            </div>

            {/* 5. Precisão dos Materiais */}
            <div id="precisao" className="scroll-mt-28">
              <h2 className="text-2xl font-black font-display text-black uppercase tracking-tight mb-4">
                5. Precisão dos <span className="text-red-700">Materiais</span>
              </h2>
              <div className="w-12 h-1 bg-red-700 mb-6"></div>
              <p className="text-base text-justify">
                Os materiais exibidos no site da Centauro Engenharia podem incluir erros técnicos, tipográficos ou 
                fotográficos. A Centauro Engenharia não garante que qualquer material em seu site seja preciso, completo 
                ou atual. A Centauro Engenharia pode fazer alterações nos materiais contidos em seu site a qualquer momento, 
                sem aviso prévio. No entanto, a Centauro Engenharia não se compromete a atualizar os materiais.
              </p>
            </div>

            {/* 6. Links */}
            <div id="links" className="scroll-mt-28">
              <h2 className="text-2xl font-black font-display text-black uppercase tracking-tight mb-4">
                6. <span className="text-red-700">Links</span>
              </h2>
              <div className="w-12 h-1 bg-red-700 mb-6"></div>
              <p className="text-base text-justify">
                A Centauro Engenharia não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo 
                de nenhum site vinculado. A inclusão de qualquer link não implica endosso por parte da Centauro Engenharia. 
                O uso de qualquer site vinculado é por conta e risco do usuário.
              </p>
            </div>

            {/* 7. Modificações */}
            <div id="modificacoes" className="scroll-mt-28">
              <h2 className="text-2xl font-black font-display text-black uppercase tracking-tight mb-4">
                7. <span className="text-red-700">Modificações</span>
              </h2>
              <div className="w-12 h-1 bg-red-700 mb-6"></div>
              <p className="text-base text-justify">
                A Centauro Engenharia pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. 
                Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
              </p>
            </div>

            {/* 8. Lei Aplicável */}
            <div id="lei" className="scroll-mt-28">
              <h2 className="text-2xl font-black font-display text-black uppercase tracking-tight mb-4">
                8. Lei <span className="text-red-700">Aplicável</span>
              </h2>
              <div className="w-12 h-1 bg-red-700 mb-6"></div>
              <p className="text-base text-justify">
                Estes termos e condições são regidos e interpretados de acordo com as leis da República Federativa do Brasil 
                e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais competentes.
              </p>
              <p className="text-base text-justify mt-4">
                Caso tenha qualquer dúvida, entre em contato conosco através da nossa página de{" "}
                <Link href="/fale-conosco" className="text-red-700 font-semibold hover:underline transition-colors">
                  Contato
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
