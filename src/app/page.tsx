import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Confianca from "@/components/Confianca";
import Clientes from "@/components/Clientes";
import Servicos from "@/components/Servicos";
import Depoimentos from "@/components/Depoimentos";
export default function Home() {
  return (
    <main>
      <Hero 
        ctaSecondary={{
          text: "Saiba Mais",
          href: "/#Confianca"
        }}
      />
      <Stats />
      <Confianca />
      <Clientes />
      <Servicos />
      <Depoimentos />
    </main>
    
  );
}
