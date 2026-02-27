import { Store } from "lucide-react";
import Image from "next/image";
import type { ReactElement } from "react";
import { CallToActionButton } from "./components/CallToActionButton";

export const CallToActionSection = (): ReactElement => {
  return (
    <section className="relative">
      <div
        className="
          container
          flex
          flex-col
          gap-8
          items-center
          mx-auto
          px-4
          py-14
          md:gap-10
          md:pb-20
          md:pt-24
        "
      >
        <div
          className="
            overflow-hidden
            absolute
            left-[calc(50%-(calc(var(--spacing)*8)))]
            top-0
            p-4
            bg-cyan-300
            -translate-y-1/2
            rounded-full
          "
        >
          <Store className="h-8 w-8 text-cyan-100" />
        </div>

        <h2 className="font-bold font-head leading-tight text-2xl text-center md:max-w-md md:text-3xl">
          {"Crie uma loja online e inicie suas vendas ainda hoje"}
        </h2>
        <CallToActionButton />
        <Image
          src={"./background-cta.svg"}
          alt=""
          aria-hidden
          fill
          className="object-cover object-top h-full w-auto -z-50"
        />
      </div>
    </section>
  );
};
