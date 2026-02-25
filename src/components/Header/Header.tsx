import Link from "next/link";
import { Logo } from "../Logo";
import { Button } from "../ui/button";
import { ActiveLink } from "./ActiveLink";

export const Header = () => {
  return (
    <header
      className="
        z-50
        fixed
        top-0
        w-full
        bg-background/95
        border-b
        border-gray-500
        backdrop-blur-md
        supports-backdrop-filter:bg-background/60
      "
    >
      <div className="mx-auto px-4 max-w-7xl lg:px-8 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <nav className="flex gap-6 items-center">
            <ActiveLink href="/">Início</ActiveLink>
            <ActiveLink href="/blog">Blog</ActiveLink>
            <Button
              asChild
              className="text-gray-800 hover:bg-blue-100 rounded-full"
            >
              <Link href={{ pathname: "comecar" }}>Começar</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
