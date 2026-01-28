'use client'
import Marquee from "react-fast-marquee";
import Image from "next/image";

const logos = [
  { src: "/logos/globo1.png", alt: "Logo 1" },
  { src: "/logos/logobraskem.png", alt: "Logo 2" },
  { src: "/logos/downtown.png", alt: "Logo 3" },
  { src: "/logos/mprj.png", alt: "Logo 4" },
  { src: "/logos/subsea7.png", alt: "Logo 5" },
  { src: "/logos/free-procter-icon-svg-download-png-282881.png", alt: "Logo 6" },
  { src: "/logos/prudential.png", alt: "Logo 7" },
  { src: "/logos/sbm.png", alt: "Logo 8" },
  { src: "/logos/merck.png", alt: "Logo 9" },
  { src: "/logos/logo_metro.png", alt: "Logo 10" }  
];

export default function Clientes() {
  return (
    <section className="py-15 bg-gray-50">
      <div className="w-full px-8 md:px-16 mb-5">
        <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-gray-900">
          Empresas que confiam na <span className="ext-center text-sm font-bold uppercase tracking-widest text-red-800">Centauro</span>
        </h2>
      </div>

      {/* O gradiente lateral dá o toque profissional de "fading" */}
      <div className="relative shadow-lg">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10" />

        <Marquee gradient={false} speed={120} pauseOnHover={false}>
          {logos.map((logo, index) => (
            <div key={index} className="mx-12 flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={60}
                className="opacity-100 hover:opacity-60 transition-opacity duration-300"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}