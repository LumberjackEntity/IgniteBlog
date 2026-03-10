import Link from "next/link";
import { Logo } from "../Logo";
import { Button } from "../ui/button";
import { ActiveLink } from "./ActiveLink";

export const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-gray-500 border-b bg-background/95 backdrop-blur-md supports-backdrop-filter:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <nav className="flex items-center gap-6">
            <ActiveLink href="/">Início</ActiveLink>
            <ActiveLink href="/blog">Blog</ActiveLink>
            <Button
              asChild
              className="rounded-full text-gray-800 hover:bg-blue-100"
            >
              <Link href={{ pathname: "comecar" }}>Começar</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
