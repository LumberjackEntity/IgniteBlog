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
        "font-medium text-sm leading-normal transition-colors",
        isCurrentPath
          ? "pointer-events-none text-blue-200"
          : "text-gray-100 hover:text-blue-100",
      )}
    >
      {children}
    </Link>
  );
};
