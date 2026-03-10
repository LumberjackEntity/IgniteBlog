import { HeartHandshake, PaintbrushVertical, Store } from "lucide-react";
import Image from "next/image";
import { SupportCard, type SupportCardType } from "./components/SupportCard";

const cards: SupportCardType[] = [
  {
    icon: PaintbrushVertical,
    variant: "blue",
    title: "Personalize seu site",
    description:
      "Adicione sua logo, favicon e cores no seu catálago, e tenha tudo com a sua cara.",
  },
  {
    icon: Store,
    variant: "cyan",
    title: "Venda de qualquer loja",
    description:
      "Não importa a loja, o Site.Set permite que você insira qualquer link de afiliado.",
  },
  {
    icon: HeartHandshake,
    variant: "blue",
    title: "Receba suporte amigável",
    description:
      "Nossa equipe estará sempre pronta para te atender e te ajudar no que for preciso.",
  },
];

export const SupportSection = () => {
  function formatTitle(title: string): string {
    const formattedTitle: string = String(title)
      .replaceAll(" ", "-")
      .toUpperCase();
    return formattedTitle;
  }

  return (
    <section className="relative">
      <div className="container mx-auto flex flex-col items-center justify-center gap-8 px-4 py-12">
        <h2 className="text-center text-2xl md:max-w-lg lg:text-3xl">
          {"Sua loja de afiliados, simples, do jeito que deveria ser"}
        </h2>

        <div className="flex max-w-5xl flex-col gap-4 md:flex-row md:gap-6">
          {cards.map((card) => (
            <SupportCard key={`${formatTitle(card.title)}_CARD`} card={card} />
          ))}
        </div>
      </div>
      <Image
        src={"/background-support.svg"}
        alt=""
        aria-hidden
        fill
        className="-z-50 h-full w-auto object-cover object-center"
      />
    </section>
  );
};
