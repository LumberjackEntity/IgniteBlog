import Link, { type LinkProps } from "next/link";

type FooterLinkProps = {
  children: React.ReactNode;
} & LinkProps;

export const FooterLink = ({ children, href }: FooterLinkProps) => {
  return (
    <Link
      href={href}
      className="font-medium text-blue-100 text-sm leading-normal transition-colors hover:text-blue-200"
    >
      {children}
    </Link>
  );
};
