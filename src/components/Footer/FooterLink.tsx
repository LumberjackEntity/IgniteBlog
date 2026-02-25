import Link, { type LinkProps } from "next/link";

type FooterLinkProps = {
  children: React.ReactNode;
} & LinkProps;

export const FooterLink = ({ children, href }: FooterLinkProps) => {
  return (
    <Link
      href={href}
      className="
        font-medium
        leading-normal
        text-blue-100
        text-sm
        transition-colors
        hover:text-blue-200
      "
    >
      {children}
    </Link>
  );
};
