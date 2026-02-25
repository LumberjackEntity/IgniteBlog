import { Sections } from "@/components/Sections";

export default function Home() {
  const { Hero, Feature } = Sections;

  return (
    <article className="flex flex-col">
      <Hero />
      <Feature />
    </article>
  );
}
