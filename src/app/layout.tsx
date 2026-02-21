import type { Metadata } from "next";
import "./globals.css";
import { Inter, PT_Sans_Caption } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Ignite Blog",
};

const inter = Inter({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-inter",
});
const ptSansCaption = PT_Sans_Caption({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-pt-sans-caption",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`font-inter ${inter.variable} ${ptSansCaption.variable} antialiased dark`}
      >
        <div className="flex flex-col relative min-h-screen">
          <Header />
          <main className="flex-1 flex-col mb-12 mt-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
