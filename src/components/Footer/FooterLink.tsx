import Link, { type LinkProps } from "next/link";

type FooterLink = {
  children: React.ReactNode;
} & LinkProps;

export const FooterLink = ({ children, href }: FooterLink) => {
  return (
    <Link href={href} className="transition-colors hover:text-primary">
      {children}
    </Link>
  );
};
