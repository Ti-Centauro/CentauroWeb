import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-neutral-900 text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-8 md:px-16">
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
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Compromisso com a sua segurança. Tecnologia e excelência em cada detalhe.
                        </p>
                    </div>

                    {/* Serviços */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-red-800 uppercase tracking-wider">Serviços</h3>
                        <ul className="space-y-3">
                            {["CFTV", "SDAI", "SCA", "SAI", "Sonorização"].map((item, i) => (
                                <li key={i}>
                                    <Link href="/servicos" className="text-gray-400 hover:text-red-800 transition-colors text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Institucional */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-red-800 uppercase tracking-wider">Institucional</h3>
                        <ul className="space-y-3">
                            {["Sobre Nós", "Clientes", "Depoimentos", "Contato"].map((item, i) => (
                                <li key={i}>
                                    <Link href="/" className="text-gray-400 hover:text-red-800 transition-colors text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contato */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-red-800 uppercase tracking-wider">Contato</h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <Phone className="w-5 h-5 text-red-800 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-gray-400 text-sm">+55 21 3176-7900</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Mail className="w-5 h-5 text-red-800 mt-0.5 flex-shrink-0" />
                                <p className="text-gray-400 text-sm">contato@centaurotelecom.com.br</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-red-800 mt-0.5 flex-shrink-0" />
                                <p className="text-gray-400 text-sm">Rio de Janeiro, RJ</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-red-800 mt-0.5 flex-shrink-0" />
                                <p className="text-gray-400 text-sm">20070-000 – Brasil</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Linha Final */}
                <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Centauro Segurança. Todos os direitos reservados.
                    </p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link href="#" className="text-gray-500 hover:text-red-800 transition-colors">Política de Privacidade</Link>
                        <Link href="#" className="text-gray-500 hover:text-red-800 transition-colors">Termos de Uso</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}