import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href={{ pathname: "" }} className="relative h-8 w-29">
      <Image src="./logo.svg" alt="Logotipo oficial Site.Set" fill />
    </Link>
  );
};
