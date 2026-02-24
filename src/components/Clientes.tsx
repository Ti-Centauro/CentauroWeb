'use client'
import Marquee from "react-fast-marquee";
import Image from "next/image";

const logos = [
  { src: "/logos/globo1.webp", alt: "Logo 1" },
  { src: "/logos/logobraskem.webp", alt: "Logo 2" },
  { src: "/logos/downtown.webp", alt: "Logo 3" },
  { src: "/logos/icon-mprj.webp", alt: "Logo 4" },
  { src: "/logos/subsea7.webp", alt: "Logo 5" },
  { src: "/logos/icon-procter.webp", alt: "Logo 6" },
  { src: "/logos/icon-prudential.webp", alt: "Logo 7" },
  { src: "/logos/sbm.webp", alt: "Logo 8" },
  { src: "/logos/merck.webp", alt: "Logo 9" },
  { src: "/logos/logo_metro.webp", alt: "Logo 10" }
];

export default function Clientes() {
  return (
    <section className="py-15 bg-gray-50">
      <div className="w-full px-8 md:px-16 mb-5">
        <h2 className="text-center text-sm font-display font-semibold uppercase tracking-widest text-gray-900">
          Empresas que confiam na <span className="ext-center text-sm font-display font-black uppercase tracking-widest text-red-800">Centauro</span>
        </h2>
      </div>

      {/* O gradiente lateral dá o toque profissional de "fading" */}
      <div className="relative shadow-md">
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