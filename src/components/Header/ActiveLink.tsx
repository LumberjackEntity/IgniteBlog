"use client";
import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type ActiveLinkProps = {
  children: React.ReactNode;
} & LinkProps;

export const ActiveLink = ({ children, href, ...rest }: ActiveLinkProps) => {
  const pathname = usePathname();
  const isCurrentPath =
    pathname === href ||
    pathname === rest.as ||
    pathname.startsWith(String(rest.as));

  return (
    <Link
      href={href}
      className={cn(
        "transition-colors leading-normal font-medium text-sm",
        isCurrentPath
          ? "text-blue-200 pointer-events-none"
          : "text-gray-100 hover:text-blue-100",
      )}
    >
      {children}
    </Link>
  );
};
