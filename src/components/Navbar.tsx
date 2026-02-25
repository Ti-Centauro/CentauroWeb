"use client";

import { useState } from "react";
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

const servicos = [
  { href: "/servicos/cftv", label: "CFTV", desc: "Sistema de Circuito Fechado de Televisão" },
  { href: "/servicos/sca", label: "SCA", desc: "Sistema de Controle de Acesso" },
  { href: "/servicos/sdai", label: "SDAI", desc: "Sistema de Detecção e Alarme de Incêndio" },
  { href: "/servicos/sai", label: "SAI", desc: "Sistema de Alerta de Intrusão" },
  { href: "/servicos/son", label: "SON", desc: "Sistema de Sonorização" },
  { href: "/servicos/cabeamento-estruturado", label: "REDES", desc: "Cabeamento Estruturado e Dados" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicosOpen, setServicosOpen] = useState(false);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setServicosOpen(false);
  };

  return (
    <>
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

          {/* Links de Navegação Centralizados com Dropdown - Desktop */}
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

                {/* Link - QUEM SOMOS */}
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
                  )}>
                    SERVIÇOS
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {servicos.map((s) => (
                        <li key={s.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={s.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-red-700"
                            >
                              <div className="text-sm font-medium leading-none">
                                {s.label}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {s.desc}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
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

          {/* Botão Fale Conosco à Direita - Desktop */}
          <div className="hidden md:flex items-center">
            <Link
              href="/fale-conosco"
              className="bg-red-800 text-white px-5 py-2 rounded-full hover:bg-red-900 transition-all"
            >
              Fale Conosco
            </Link>
          </div>

          {/* Botão Hamburger - Mobile */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] relative z-[60]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Abrir menu"
          >
            <span
              className={cn(
                "block w-6 h-[2px] bg-zinc-800 transition-all duration-300 origin-center",
                mobileOpen && "rotate-45 translate-y-[7px]"
              )}
            />
            <span
              className={cn(
                "block w-6 h-[2px] bg-zinc-800 transition-all duration-300",
                mobileOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block w-6 h-[2px] bg-zinc-800 transition-all duration-300 origin-center",
                mobileOpen && "-rotate-45 -translate-y-[7px]"
              )}
            />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-[55] transition-opacity duration-300 md:hidden",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={closeMobile}
      />

      {/* Sidebar Mobile */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-[280px] bg-white z-[56] shadow-2xl transition-transform duration-300 ease-in-out md:hidden flex flex-col",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header do sidebar */}
        <div className="h-20 flex items-center px-6 border-b border-gray-200">
          <span className="text-lg font-semibold text-zinc-800">Menu</span>
        </div>

        {/* Links */}
        <div className="flex-1 overflow-y-auto py-4">
          <Link
            href="/"
            onClick={closeMobile}
            className={cn(
              "block px-6 py-3 text-sm font-medium transition-colors",
              pathname === "/" ? "text-red-700 bg-red-50" : "text-zinc-800 hover:text-red-700 hover:bg-red-50/50"
            )}
          >
            HOME
          </Link>

          <Link
            href="/quem-somos"
            onClick={closeMobile}
            className={cn(
              "block px-6 py-3 text-sm font-medium transition-colors",
              pathname === "/quem-somos" ? "text-red-700 bg-red-50" : "text-zinc-800 hover:text-red-700 hover:bg-red-50/50"
            )}
          >
            QUEM SOMOS
          </Link>

          {/* Serviços com submenu */}
          <div>
            <button
              onClick={() => setServicosOpen(!servicosOpen)}
              className={cn(
                "w-full flex items-center justify-between px-6 py-3 text-sm font-medium transition-colors",
                pathname.startsWith("/servicos") ? "text-red-700 bg-red-50" : "text-zinc-800 hover:text-red-700 hover:bg-red-50/50"
              )}
            >
              <span>SERVIÇOS</span>
              <svg
                className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  servicosOpen && "rotate-180"
                )}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                servicosOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              )}
            >
              {servicos.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={closeMobile}
                  className={cn(
                    "block pl-10 pr-6 py-2.5 text-sm transition-colors",
                    pathname === s.href ? "text-red-700 bg-red-50" : "text-zinc-600 hover:text-red-700 hover:bg-red-50/50"
                  )}
                >
                  <span className="font-medium">{s.label}</span>
                  <span className="block text-xs text-zinc-400 mt-0.5">{s.desc}</span>
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/clientes"
            onClick={closeMobile}
            className={cn(
              "block px-6 py-3 text-sm font-medium transition-colors",
              pathname === "/clientes" ? "text-red-700 bg-red-50" : "text-zinc-800 hover:text-red-700 hover:bg-red-50/50"
            )}
          >
            CLIENTES
          </Link>
        </div>

        {/* Botão Fale Conosco no final do sidebar */}
        <div className="p-6 border-t border-gray-200">
          <Link
            href="/fale-conosco"
            onClick={closeMobile}
            className="block w-full text-center bg-red-800 text-white px-5 py-3 rounded-full hover:bg-red-900 transition-all font-medium"
          >
            Fale Conosco
          </Link>
        </div>
      </div>
    </>
  );
}
