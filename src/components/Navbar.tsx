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
    <nav className="fixed top-0 w-full z-50 bg-white/100 ">
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
                      "group inline-flex h-9 w-max items-center justify-center  px-4 py-2 text-sm font-medium hover:bg-blue-500/0  hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 text-zinc-950 hover:text-red-700 transition-colors"
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
                      "group inline-flex h-9 w-max items-center justify-center  px-4 py-2 text-sm font-medium hover:bg-blue-500/0  hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 text-zinc-950 hover:text-red-700 transition-colors"
                    )}
                  >
                    QUEM SOMOS
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Dropdown - SERVIÇOS */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-zinc-950 hover:text-red-700 data-[state=open]:text-red-700 bg-black/00 hover:bg-blue-500/0">
                  SERVIÇOS
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="#CFTV"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
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
                          href="#SCA"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
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
                          href="#SDAI"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
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
                          href="#SAI"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
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
                          href="#SON"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
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
                          href="#MANUNTENCAO"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Manuntenção
                          </div>
                          <p className="line-clamp-3 text-sm leading-snug text-muted-foreground">
                          Preventiva e Corretiva
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
                    href="/"
                    className={cn(
                      "group inline-flex h-9 w-max items-center justify-center  px-4 py-2 text-sm font-medium hover:bg-blue-500/0  hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 text-zinc-950 hover:text-red-700 transition-colors"
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
