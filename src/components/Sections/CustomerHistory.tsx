import type { ReactElement } from "react";
import { FeedbackCard, type FeedbackCardType } from "./components/FeedbackCard";

const cards: FeedbackCardType[] = [
  {
    message:
      "Criar minha loja com o Site.Set foi a melhor decisão para o meu negócio. A plataforma é super intuitiva, e consegui colocar meus produtos à venda em poucos minutos.",
    user: {
      name: "Annete Bones",
      role: "CEO na Anne Corp.",
      profilePhotoUrl: "https://github.com/LumberjackEntity.png",
    },
  },
  {
    message:
      "Transformar minha ideia em uma loja online foi fácil e rápido. Adorei as opções de personalização e a simplicidade para gerenciar os pedidos. Já vejo meus produtos alcançando mais pessoas!",
    user: {
      name: "Jacob Jones",
      role: "CEO na JJ Org.",
      profilePhotoUrl: "https://github.com/LumberjackEntity.png",
    },
  },
];

export const CustomerHistorySection = (): ReactElement => {
  return (
    <section className="container flex flex-col gap-8 items-center mx-auto px-4 py-20">
      <h2 className="font-bold font-head leading-tight text-2xl">
        {"Quem utiliza, aprova!"}
      </h2>

      <div className="flex flex-col gap-4 items-center justify-center md:flex-row md:gap-6">
        {cards.map((card) => (
          <FeedbackCard
            key={`${String(card.user.name).toUpperCase()}_CARD`}
            card={card}
          />
        ))}
      </div>
    </section>
  );
};
