import Image from "next/image";
import type { ReactElement } from "react";
import { Separator } from "../ui/separator";

type Author = {
  name: string;
  profileImageUrl: string;
};

export type ArticleMetadata = {
  date: Date;
  title: string;
  description: string;
  author: Author;
};

interface Props {
  articleMetadata?: ArticleMetadata;
}

export const BlogArticleCard = ({ articleMetadata }: Props): ReactElement => {
  return (
    <article className="mx-auto rounded-xl border border-gray-400 bg-gray-600 p-2">
      <div className="relative">
        <div className="absolute top-0 right-0 z-50 flex items-center justify-center rounded-bl-xl bg-gray-600 pt-0.5 pr-1.5 pb-1.5 pl-2.5">
          <span className="text-gray-300 text-xs leading-normal">
            {"20/12/24"}
          </span>
        </div>

        <div className="relative h-[calc(9rem+15vw)] w-full overflow-hidden rounded-md lg:h-[calc(9rem+8vw)]">
          <Image
            src={"/assets/POST_01.jpg"}
            alt=""
            aria-hidden
            fill
            className="object-cover object-center"
          />
        </div>

        <div className="p-2">
          <div className="flex flex-col gap-2 p-2">
            <h2 className="text-base">
              {"Transforme seu negócio em uma loja virtual"}
            </h2>
            <p className="line-clamp-2 text-gray-300 text-xs leading-normal">
              {
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, est quisquam iusto obcaecati atque qui omnis adipisci doloremque quia libero error veritatis numquam sed incidunt ea fugiat facere, pariatur ipsum?"
              }
            </p>
          </div>

          <Separator className="my-3 bg-gray-400" />

          <div className="flex items-center gap-2">
            <Image
              src={"https://github.com/LumberjackEntity.png"}
              alt=""
              width={20}
              height={20}
              className="w-fit overflow-hidden rounded-full ring ring-blue-200"
            />
            <span className="text-gray-300 text-sm">{"Aspen Dokidis"}</span>
          </div>
        </div>
      </div>
    </article>
  );
};
