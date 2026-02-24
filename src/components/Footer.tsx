import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white text-white pt-8 pb-8 border-t-3 border-red-700 w-full px-8 md:px-16">
            <div className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    
                    {/* Logo e Missão */}
                    <div className="md:col-span-1">
                        <div className="relative h-16 w-40 mb-6">
                            <Image 
                                src="/logo.svg" 
                                alt="Centauro Segurança" 
                                fill 
                                className="object-contain logo-red"
                            />
                        </div>
                        <p className="text-black text-sm leading-relaxed mb-4">
                            Compromisso com a sua segurança. Tecnologia e excelência em cada detalhe.
                        </p>
                        <div className="flex flex-col">
                            <p className="text-red-800 text-sm font-bold">Powered by Centauro</p>
                            <p className="text-red-800 text-sm font-bold">Design by Centauro</p>
                        </div>
                    </div>

                    {/* Serviços */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-red-800 uppercase tracking-wider">Serviços</h3>
                        <ul className="space-y-3">
                            {[
                                { name: "CFTV", href: "/servicos/cftv" },
                                { name: "SDAI", href: "/servicos/sdai" },
                                { name: "SCA", href: "/servicos/sca" },
                                { name: "SAI", href: "/servicos/sai" },
                                { name: "Sonorização", href: "/servicos/son" },
                                { name: "Redes", href: "/servicos/cabeamento-estruturado" },
                            ].map((item, i) => (
                                <li key={i}>
                                    <Link href={item.href} className="text-black hover:text-red-800 hover:font-bold transition-colors text-sm">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Institucional */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-red-800 uppercase tracking-wider">Institucional</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/quem-somos" className="text-black hover:text-red-800 hover:font-bold transition-colors text-sm">
                                    Sobre Nós
                                </Link>
                            </li>
                            <li>
                                <Link href="/clientes" className="text-black hover:text-red-800 hover:font-bold transition-colors text-sm">
                                    Clientes
                                </Link>
                            </li>

                            <li>
                                <Link href="/fale-conosco" className="text-black hover:text-red-800 hover:font-bold transition-colors text-sm">
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contato */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-red-800 uppercase tracking-wider">Contato</h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <Phone className="w-5 h-5 text-red-800 mt-0.5 flex-shrink-0" />
                                <div className="flex flex-col">
                                    <p className="text-black text-sm">+55 21 3176-7900</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Mail className="w-5 h-5 text-red-800 mt-0.5 flex-shrink-0" />
                                <p className="text-black text-sm">contato@centaurotelecom.com.br</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-red-800 mt-0.5 flex-shrink-0" />
                                <p className="text-black text-sm">Rio de Janeiro, RJ</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-red-800 mt-0.5 flex-shrink-0" />
                                <p className="text-black text-sm">20070-000 – Brasil</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Linha Final */}
                <div className="border-t border-gray-50 mt-4 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-black text-sm text-center md:text-left">
                        © {new Date().getFullYear()} Centauro Segurança. Todos os direitos reservados.
                    </p>

                    <div className="flex space-x-4">
                        <Link href="/politica-de-privacidade" className="text-black hover:text-red-800 hover:font-bold transition-colors">Política de Privacidade</Link>
                        <Link href="/termos-de-uso" className="text-black hover:text-red-800 hover:font-bold transition-colors">Termos de Uso</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}