import { FC } from "react";
import { Common } from "../../interfaces/Common";

const Logo: FC<Common> = ({ classname }) => {
  return (
    <div className={`font-poorStory text-3xl ${classname}`}>probablyArth</div>
  );
};

export default Logo;
