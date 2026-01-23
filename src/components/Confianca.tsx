import Image from "next/image"

export default function Confianca(){
  return(
    <section id="Confianca" className="relative py-20 bg-slate-200 overflow-hidden">
        <div className="absolute top-0 left-0 w-full lg:w-[40%] h-full bg-red-800 z-0"></div>

    <div className="container mx-auto px-4 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          <div className="relative h-[350px] lg:h-[420px] w-full rounded-3xl overflow-hidden shadow-2xl">
             <Image
              src="/img_confianca.png"
              alt="Profissional Centauro trabalhando"
              fill
              className="object-cover"
             />
          </div>

         <div>
            <h2 className="text-4xl md:text-3xl font-bold text-gray-900 leading-tight">Mais de <span className="text-red-800">R$ 5,5 bilhões</span> em patrimônios já contam com as soluções da Centauro.
            </h2>
      <br />
            <p className="text-gray-600 text-xl leading-relaxed">
              Nossa expertise garante que sua infraestrutura esteja sempre operando com máxima eficiência, segurança e retorno sobre o investimento.
            </p>

        </div>

    </div>

    </div>
    </section>
  );
}