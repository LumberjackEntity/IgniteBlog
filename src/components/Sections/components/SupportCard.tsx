import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type SupportCardType = {
  icon: LucideIcon;
  variant: "blue" | "cyan";
  title: string;
  description: string;
};

interface Props {
  card: SupportCardType;
}

export const SupportCard = ({
  card: { icon: Icon, variant, title, description },
}: Props) => {
  return (
    <article
      className={cn(
        "flex flex-col gap-4 p-6 rounded-xl",
        variant === "blue" && "bg-blue-400",
        variant === "cyan" && "bg-cyan-300",
      )}
    >
      <div
        className={cn(
          "p-2 w-fit rounded-lg",
          variant === "blue" && "bg-blue-300",
          variant === "cyan" && "bg-cyan-200",
        )}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-bold font-head leading-tight text-xl">{title}</h3>
        <p className="leading-normal text-gray-200 text-sm">{description}</p>
      </div>
    </article>
  );
};
