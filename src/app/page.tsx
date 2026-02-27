import { Sections } from "@/components/Sections";

export default function Home() {
  const { Hero, Feature, Support, CustomerHistory, CallToAction } = Sections;

  return (
    <article className="flex flex-col">
      <Hero />
      <Feature />
      <Support />
      <CustomerHistory />
      <CallToAction />
    </article>
  );
}
