import { Clock, Store } from "lucide-react";
import Image from "next/image";
import { CallToActionButton } from "./components/CallToActionButton";

export const HeroSection = () => {
  return (
    <section
      className="
        container
        flex
        items-center
        justify-center
        relative
        mt-10
        mx-auto
        px-4
        py-8
        md:mt-0
      "
    >
      <div className="flex flex-col gap-14 items-center md:items-start">
        <div className="flex flex-col gap-8 items-center md:items-start md:max-w-2xl">
          <h1
            className="
              font-bold
              font-head
              leading-tight
              text-3xl
              text-center
              text-gray-100
              lg:text-5xl
              md:text-4xl
              md:text-start
            "
          >
            {"Venda seus produtos como afiliado em um único lugar"}
          </h1>
          <div className="font-normal leading-normal text-base">
            <div className="flex gap-2 items-center">
              <Clock className="h-4 w-4 text-cyan-100" />
              <span className="text-gray-200">
                {"Crie seu site em menos de 5 minutos"}
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <Store className="h-4 w-4 text-cyan-100" />
              <span className="text-gray-200">
                {"Acompanhe e otimize seu negócio online"}
              </span>
            </div>
          </div>
        </div>

        <div className="flex-col inline-flex gap-4 items-center md:items-start">
          <CallToActionButton />

          <span className="leading-normal text-gray-300 text-xs">
            {"Não precisa de cartão de crédito"}
          </span>
        </div>
      </div>

      <div
        className="
          hidden
          items-center
          justify-center
          order-first
          h-80
          md:flex
          md:h-full
          md:order-last
        "
      >
        <Image
          src={"./background-hero.svg"}
          alt=""
          aria-hidden
          width={200}
          height={200}
          className="object-contain h-full w-auto"
        />
      </div>
    </section>
  );
};
