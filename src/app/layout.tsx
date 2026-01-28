// src/app/layout.tsx
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="bg-white-500">
        <Navbar /> {/* Ela fica aqui para aparecer em todas as páginas */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
