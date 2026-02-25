import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const CallToActionButton = ({ className = "" }: Props) => {
  return (
    <Button
      className={cn(
        "text-gray-100 bg-blue-300 hover:bg-blue-200 hover:text-white rounded-full md:text-base",
        className,
      )}
      asChild
    >
      <Link href={{ pathname: "/" }}>
        {"Criar loja grátis"}
        <ArrowRight className="h-6 w-6 md:h-10 md:w-10" />
      </Link>
    </Button>
  );
};
