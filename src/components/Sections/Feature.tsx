import {
  CallToActionFeatureCard,
  FeatureCard,
  type FeatureCardType,
} from "./components/FeatureCard";

const cards: FeatureCardType[] = [
  {
    tag: "Simples",
    title: "Crie um catálogo de produtos online em poucos minutos",
  },
  {
    tag: "Prático",
    title: "Venda para seu público através de uma plataforma única",
  },
];

export const FeatureSection = () => {
  return (
    <section className="container grid gap-3 mx-auto px-4 py-10 md:gap-6 md:grid-cols-2">
      {cards.map((card) => (
        <FeatureCard
          key={`${String(card.tag).toUpperCase()}_CARD`}
          card={card}
        />
      ))}

      <CallToActionFeatureCard
        card={{
          tag: "Personalizável",
          title: "Tenha uma loja online personalizada com a cara da sua marca",
        }}
      />
    </section>
  );
};
