import { Store } from "lucide-react";
import Image from "next/image";
import type { ReactElement } from "react";
import { cn } from "@/lib/utils";
import { CallToActionButton } from "./components/CallToActionButton";

interface Props {
  className?: string;
}

export const CallToActionSection = ({ className }: Props): ReactElement => {
  return (
    <section className={cn("relative", className)}>
      <div className="container mx-auto flex flex-col items-center gap-8 px-4 py-14 md:gap-10 md:pt-24 md:pb-20">
        <div className="-translate-y-1/2 absolute top-0 left-[calc(50%-(calc(var(--spacing)*8)))] overflow-hidden rounded-full bg-cyan-300 p-4">
          <Store className="h-8 w-8 text-cyan-100" />
        </div>

        <h2 className="text-center font-bold text-2xl md:max-w-md md:text-3xl">
          {"Crie uma loja online e inicie suas vendas ainda hoje"}
        </h2>
        <CallToActionButton />
        <Image
          src={"/background-cta.svg"}
          alt=""
          aria-hidden
          fill
          className="-z-50 h-full w-auto object-cover object-top"
        />
      </div>
    </section>
  );
};
