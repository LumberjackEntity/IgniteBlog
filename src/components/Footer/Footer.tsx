import { Logo } from "../Logo";
import { FooterLink as Link } from "./FooterLink";

export const Footer = () => {
  return (
    <footer className="bg-gray-500">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex justify-between">
          <Logo />
          <nav className="flex flex-col gap-3 md:flex-row md:gap-6 lg:gap-8">
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
