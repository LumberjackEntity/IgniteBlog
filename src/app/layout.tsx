import type { Metadata } from "next";
import "./globals.css";
import { Inter, PT_Sans_Caption } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Site.Set",
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
        className={`font-body ${inter.variable} ${ptSansCaption.variable} dark subpixel-antialiased`}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="mt-16 flex-1 flex-col">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
