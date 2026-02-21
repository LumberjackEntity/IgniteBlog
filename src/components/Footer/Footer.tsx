import { Logo } from "../Logo";
import { FooterLink as Link } from "./FooterLink";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto px-6 py-8 max-w-7xl">
        <div className="flex justify-between">
          <Logo />
          <nav className="flex flex-col gap-3 text-muted-foreground text-sm lg:gap-8 md:flex-row md:gap-6">
            <Link href={{ pathname: "tos" }}>Termos de Uso</Link>
            <Link href={{ pathname: "privacy-policy" }}>
              Política de Privacidade
            </Link>
            <Link href={{ pathname: "give-feedback" }}>Enviar Feedback</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
