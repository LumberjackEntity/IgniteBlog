"use client";
import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type ActiveLink = {
  children: React.ReactNode;
} & LinkProps;

export const ActiveLink = ({ children, href, ...rest }: ActiveLink) => {
  const pathname = usePathname();
  const isCurrentPath =
    pathname === href ||
    pathname === rest.as ||
    pathname.startsWith(String(rest.as));

  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        isCurrentPath ? "text-blue-500" : "text-muted-foreground",
      )}
    >
      {children}
    </Link>
  );
};
