"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/100 border-b border-gray-200 shadow-lg">
      <div className="w-full px-8 md:px-16 h-20 flex items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 flex-1">
          <Link href="/" onClick={handleLogoClick} className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={150}
              height={58}
              className="h-auto max-h-12 w-auto logo-red"
              priority
            />
          </Link>
        </div>

        {/* Links de Navegação Centralizados com Dropdown */}
        <div className="hidden md:flex items-center mr-4">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Link simples - HOME */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className={cn(
                      "group inline-flex h-9 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 text-zinc-950 relative after:absolute after:bottom-0 after:left-4 after:h-[3px] after:bg-red-700 after:transition-all after:duration-300",
                      pathname === "/" ? "after:w-[calc(100%-32px)] text-red-700" : "after:w-0 hover:after:w-[calc(100%-32px)] hover:text-red-700"
                    )}
                  >
                    HOME
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Dropdown - QUEM SOMOS */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/quem-somos"
                    className={cn(
                      "group inline-flex h-9 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 text-zinc-950 relative after:absolute after:bottom-0 after:left-4 after:h-[3px] after:bg-red-700 after:transition-all after:duration-300",
                      pathname === "/quem-somos" ? "after:w-[calc(100%-32px)] text-red-700" : "after:w-0 hover:after:w-[calc(100%-32px)] hover:text-red-700"
                    )}
                  >
                    QUEM SOMOS
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Dropdown - SERVIÇOS */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(
                  "text-zinc-950 bg-transparent hover:bg-transparent data-[state=open]:bg-transparent focus:bg-transparent relative after:absolute after:bottom-0 after:left-4 after:h-[3px] after:bg-red-700 after:transition-all after:duration-300 after:w-0 hover:after:w-[calc(100%-32px)] hover:text-red-700 data-[state=open]:text-red-700",
                  // Mantém sublinhado se um submenu estiver ativo (opcional, aqui deixei apenas hover)
                )}>
                  SERVIÇOS
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/servicos/cftv"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-red-700"
                        >
                          <div className="text-sm font-medium leading-none">
                            CFTV
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Sistema de Circuito Fechado de Televisão
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/servicos/sca"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-red-700"
                        >
                          <div className="text-sm font-medium leading-none">
                            SCA
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Sistema de Controle de Acesso
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/servicos/sdai"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-red-700"
                        >
                          <div className="text-sm font-medium leading-none">
                            SDAI
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Sistema de Detecção e Alarme de Incêndio
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/servicos/sai"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-red-700"
                        >
                          <div className="text-sm font-medium leading-none">
                            SAI
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Sistema de Alerta de Intrusão
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/servicos/son"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-red-700"
                        >
                          <div className="text-sm font-medium leading-none">
                            SON
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Sistema de Sonorização
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                   
                   
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/servicos/cabeamento-estruturado"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-red-700"
                        >
                          <div className="text-sm font-medium leading-none">
                            REDES
                          </div>
                          <p className="line-clamp-3 text-sm leading-snug text-muted-foreground">
                          Cabeamento Estruturado e Dados
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Link simples - CLIENTES */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/clientes"
                    className={cn(
                      "group inline-flex h-9 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 text-zinc-950 relative after:absolute after:bottom-0 after:left-4 after:h-[3px] after:bg-red-700 after:transition-all after:duration-300",
                      pathname === "/clientes" ? "after:w-[calc(100%-32px)] text-red-700" : "after:w-0 hover:after:w-[calc(100%-32px)] hover:text-red-700"
                    )}
                  >
                    CLIENTES
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Botão Fale Conosco à Direita */}
        <div className="hidden md:flex items-center">
          <Link
            href="/fale-conosco"
            className="bg-red-800 text-white px-5 py-2 rounded-full hover:bg-red-900 transition-all"
          >
            Fale Conosco
          </Link>
        </div>
      </div>
    </nav>
  );
}
