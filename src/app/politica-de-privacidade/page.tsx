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

export default function PoliticaDePrivacidade() {
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
            <span className="text-red-700">Política de Privacidade</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl lg:text-4xl font-bold text-black font-sans tracking-tight">
            Política de Privacidade
          </h1>
          <div className="w-16 h-1 bg-red-700 mt-4"></div>

          {/* Subtitle */}
          <p className="mt-6 text-base lg:text-lg text-gray-600 leading-relaxed font-sans max-w-2xl">
            A sua privacidade é importante para nós. Conheça como tratamos e protegemos as suas informações pessoais.
          </p>
          <p className="mt-2 text-sm text-gray-400 font-sans">
            Última atualização: 24 de Fevereiro de 2026
          </p>
        </div>
      </motion.section>

      {/* CONTEÚDO DA POLÍTICA */}
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
                  { label: "Coleta de Informações", href: "#coleta" },
                  { label: "Uso dos Dados", href: "#uso" },
                  { label: "Armazenamento", href: "#armazenamento" },
                  { label: "Compartilhamento", href: "#compartilhamento" },
                  { label: "Links Externos", href: "#links" },
                  { label: "Seus Direitos", href: "#direitos" },
                  { label: "Compromisso do Usuário", href: "#compromisso" },
                  { label: "Vigência", href: "#vigencia" },
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
            {/* Coleta de Informações */}
            <div id="coleta" className="scroll-mt-28">
              <h2 className="text-2xl font-black font-display text-black uppercase tracking-tight mb-4">
                Coleta de <span className="text-red-700">Informações</span>
              </h2>
              <div className="w-12 h-1 bg-red-700 mb-6"></div>
              <p className="text-base text-justify">
                Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. 
                Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por 
                que estamos coletando e como essas informações serão utilizadas.
              </p>
            </div>

            {/* Uso dos Dados */}
            <div id="uso" className="scroll-mt-28">
              <h2 className="text-2xl font-black font-display text-black uppercase tracking-tight mb-4">
                Uso dos <span className="text-red-700">Dados</span>
              </h2>
              <div className="w-12 h-1 bg-red-700 mb-6"></div>
              <p className="text-base text-justify">
                As informações coletadas são utilizadas exclusivamente para fornecer e melhorar os serviços oferecidos 
                pela Centauro Engenharia, como o atendimento via formulário de contato, a comunicação com clientes e 
                a melhoria contínua da experiência no nosso site.
              </p>
            </div>

            {/* Armazenamento e Proteção */}
            <div id="armazenamento" className="scroll-mt-28">
              <h2 className="text-2xl font-black font-display text-black uppercase tracking-tight mb-4">
                Armazenamento e <span className="text-red-700">Proteção</span>
              </h2>
              <div className="w-12 h-1 bg-red-700 mb-6"></div>
              <p className="text-base text-justify">
                Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. 
                Quando armazenamos dados, protegemo-los dentro de meios comercialmente aceitáveis para evitar perdas, 
                roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
              </p>
            </div>

            {/* Compartilhamento */}
            <div id="compartilhamento" className="scroll-mt-28">
              <h2 className="text-2xl font-black font-display text-black uppercase tracking-tight mb-4">
                Compartilhamento de <span className="text-red-700">Dados</span>
              </h2>
              <div className="w-12 h-1 bg-red-700 mb-6"></div>
              <p className="text-base text-justify">
                Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando 
                exigido por lei ou por determinação judicial.
              </p>
            </div>

            {/* Links Externos */}
            <div id="links" className="scroll-mt-28">
              <h2 className="text-2xl font-black font-display text-black uppercase tracking-tight mb-4">
                Links <span className="text-red-700">Externos</span>
              </h2>
              <div className="w-12 h-1 bg-red-700 mb-6"></div>
              <p className="text-base text-justify">
                O nosso site pode conter links para sites externos que não são operados por nós. Esteja ciente de que 
                não temos controle sobre o conteúdo e práticas desses sites e não podemos nos responsabilizar por suas 
                respectivas políticas de privacidade.
              </p>
            </div>

            {/* Seus Direitos */}
            <div id="direitos" className="scroll-mt-28">
              <h2 className="text-2xl font-black font-display text-black uppercase tracking-tight mb-4">
                Seus <span className="text-red-700">Direitos</span>
              </h2>
              <div className="w-12 h-1 bg-red-700 mb-6"></div>
              <p className="text-base text-justify">
                Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos 
                fornecer alguns dos serviços desejados. O uso continuado de nosso site será considerado como aceitação de 
                nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como 
                lidamos com dados do usuário e informações pessoais, entre em contato conosco.
              </p>
            </div>

            {/* Compromisso do Usuário */}
            <div id="compromisso" className="scroll-mt-28">
              <h2 className="text-2xl font-black font-display text-black uppercase tracking-tight mb-4">
                Compromisso do <span className="text-red-700">Usuário</span>
              </h2>
              <div className="w-12 h-1 bg-red-700 mb-6"></div>
              <p className="text-base text-justify mb-4">
                O usuário se compromete a fazer uso adequado dos conteúdos e da informação que a Centauro Engenharia 
                oferece no site e, com caráter enunciativo, mas não limitativo:
              </p>
              <ul className="space-y-3 text-base">
                <li className="flex items-start gap-3">
                  <span className="text-red-700 font-bold mt-0.5">A)</span>
                  <span>Não se envolver em atividades que sejam ilegais ou contrárias à boa fé e à ordem pública;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-700 font-bold mt-0.5">B)</span>
                  <span>Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, qualquer tipo de pornografia 
                  ilegal, de apologia ao terrorismo ou contra os direitos humanos;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-700 font-bold mt-0.5">C)</span>
                  <span>Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) da Centauro Engenharia, 
                  de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros 
                  sistemas de hardware ou software que sejam capazes de causar danos.</span>
                </li>
              </ul>
            </div>

            {/* Vigência */}
            <div id="vigencia" className="scroll-mt-28">
              <h2 className="text-2xl font-black font-display text-black uppercase tracking-tight mb-4">
                <span className="text-red-700">Vigência</span>
              </h2>
              <div className="w-12 h-1 bg-red-700 mb-6"></div>
              <p className="text-base text-justify">
                Esta política é efetiva a partir de 24 de Fevereiro de 2026.
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
