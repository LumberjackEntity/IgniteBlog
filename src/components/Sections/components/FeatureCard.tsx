import Image from "next/image";
import { cn } from "@/lib/utils";
import { CallToActionButton } from "./CallToActionButton";

export type FeatureCardType = {
  tag: string;
  title: string;
};

interface Props {
  card: FeatureCardType;
}

const articleBaseStyle: string = "p-6 bg-gray-500 rounded-xl lg:p-12 md:p-9";

const tagBaseStyle: string =
  "px-3 py-1.5 w-fit font-medium text-blue-200 text-xs uppercase bg-blue-400 rounded";

const titleBaseStyle: string =
  "font-bold font-head leading-tight text-xl md:text-3xl";

export const FeatureCard = ({ card: { tag, title } }: Props) => {
  return (
    <article className={cn(articleBaseStyle, "flex flex-col gap-4")}>
      <span className={tagBaseStyle}>{tag}</span>
      <h3 className={titleBaseStyle}>{title}</h3>
    </article>
  );
};

export const CallToActionFeatureCard = ({ card: { tag, title } }: Props) => {
  return (
    <article className={cn(articleBaseStyle, "md:col-span-2")}>
      <div
        className="
          grid
          gap-4
          items-center
          justify-center
          md:gap-x-20
          md:gap-y-0
          md:grid-cols-2
          md:grid-rows-2
        "
      >
        <div className="flex flex-col gap-4 md:[grid-area:1/1/2/2]">
          <span className={tagBaseStyle}>{tag}</span>
          <h3 className={titleBaseStyle}>{title}</h3>
        </div>
        <CallToActionButton className="row-start-4 w-full md:[grid-area:2/1/3/2] md:self-end md:w-fit" />
        <Image
          src={"./background-feature.svg"}
          alt=""
          aria-hidden
          width={440}
          height={330}
          className="object-contain row-span-2 h-auto w-full"
        />
      </div>
    </article>
  );
};
