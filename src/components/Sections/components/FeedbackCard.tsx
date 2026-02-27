import Image from "next/image";
import type { ReactElement } from "react";

export type FeedbackCardType = {
  message: string;
  user: {
    name: string;
    profilePhotoUrl: string;
    role: string;
  };
};

interface Props {
  card: FeedbackCardType;
}

export const FeedbackCard = ({ card }: Props): ReactElement => {
  const { message, user } = card;

  return (
    <article
      className="
      flex
      flex-col
      gap-8
      p-6
      bg-gray-600
      border
      border-gray-400
      md:max-w-md
      rounded-xl
    "
    >
      <p className="leading-normal text-base italic">{message}</p>
      <div className="flex gap-3 items-center">
        <div className="overflow-hidden relative h-9 w-9 ring-1 ring-blue-200 rounded-full">
          <Image
            src={user.profilePhotoUrl}
            alt={`Foto de perfil de ${user.name}`}
            fill
          />
        </div>
        <div className="flex flex-col">
          <span className="font-medium leading-normal text-gray-200 text-sm">
            {user.name}
          </span>
          <span className="leading-normal text-gray-300 text-xs">
            {user.role}
          </span>
        </div>
      </div>
    </article>
  );
};
