import type { Metadata } from "next";
import { Inter, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export const metadata: Metadata = {
  icons: {
    icon: "/logo_centauro.svg",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const apolloAppId = process.env.NEXT_PUBLIC_APOLLO_APP_ID || "b7s/dw0b1bfb0e3eea9befd";

  const apolloScriptCode = `function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n;o.async=!0;o.defer=!0;o.onload=function(){window.trackingFunctions.onLoad({appId:"${apolloAppId}"})};document.head.appendChild(o)}initApollo();`;

  return (
    <html lang="pt-br">
      <head>
        <script dangerouslySetInnerHTML={{ __html: apolloScriptCode }} />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} ${playfair.variable} antialiased bg-white`}>
        <Navbar /> {/* Ela fica aqui para aparecer em todas as páginas */}
        {children}
        <Footer />
        {/* <ChatWidget /> */}
      </body>
    </html>
  );
}
