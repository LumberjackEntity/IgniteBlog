import { Clock, Store } from "lucide-react";
import Image from "next/image";
import { CallToActionButton } from "./components/CallToActionButton";

export const HeroSection = () => {
  return (
    <section className="container relative mx-auto mt-10 flex items-center justify-center px-4 py-8 md:mt-0">
      <div className="flex flex-col items-center gap-14 md:items-start">
        <div className="flex flex-col items-center gap-8 md:max-w-2xl md:items-start">
          <h1 className="text-center font-bold text-3xl text-gray-100 md:text-start md:text-4xl lg:text-5xl">
            {"Venda seus produtos como afiliado em um único lugar"}
          </h1>
          <div className="font-normal text-base leading-normal">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-cyan-100" />
              <span className="text-gray-200">
                {"Crie seu site em menos de 5 minutos"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Store className="h-4 w-4 text-cyan-100" />
              <span className="text-gray-200">
                {"Acompanhe e otimize seu negócio online"}
              </span>
            </div>
          </div>
        </div>

        <div className="inline-flex flex-col items-center gap-4 md:items-start">
          <CallToActionButton />

          <span className="text-gray-300 text-xs leading-normal">
            {"Não precisa de cartão de crédito"}
          </span>
        </div>
      </div>

      <div className="order-first hidden h-80 items-center justify-center md:order-last md:flex md:h-full">
        <Image
          src={"/background-hero.svg"}
          alt=""
          aria-hidden
          width={200}
          height={200}
          className="h-full w-auto object-contain"
        />
      </div>
    </section>
  );
};
