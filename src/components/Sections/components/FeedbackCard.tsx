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
    <article className="flex flex-col gap-8 rounded-xl border border-gray-400 bg-gray-600 p-6 md:max-w-md">
      <p className="text-base italic leading-normal">{message}</p>
      <div className="flex items-center gap-3">
        <div className="relative h-9 w-9 overflow-hidden rounded-full ring-1 ring-blue-200">
          <Image
            src={user.profilePhotoUrl}
            alt={`Foto de perfil de ${user.name}`}
            fill
          />
        </div>
        <div className="flex flex-col">
          <span className="font-medium text-gray-200 text-sm leading-normal">
            {user.name}
          </span>
          <span className="text-gray-300 text-xs leading-normal">
            {user.role}
          </span>
        </div>
      </div>
    </article>
  );
};
