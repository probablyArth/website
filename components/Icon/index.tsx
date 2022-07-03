/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { FC } from "react";
import Common from "../../Interfaces/Common";

export enum Icons {
  gh = "github.svg",
  twt = "twitter.svg",
  ln = "linkedin.svg",
}

interface Icon extends Common {
  src: Icons;
}

const Icon: FC<Icon> = ({ src }) => {
  return (
    <a className="mx-2">
      <Image
        src={`/icons/${src}`}
        alt={src}
        width={30}
        height={30}
        layout="fixed"
      />
    </a>
  );
};

export default Icon;
