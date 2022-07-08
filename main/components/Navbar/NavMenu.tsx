import { FC } from "react";
import Common from "../../Interfaces/Common";
import NavLink from "../Link";
import { useMediaQuery } from "../../utils/useMediaQuery";

const NavMenu: FC<Common> = ({ classname }) => {
  const isMD = useMediaQuery("(min-width: 768px)");

  const returnComp = !isMD ? (
    <menu
      className={`self-center flex flex-col bg-zinc-800 text-center rounded-sm transition-all duration-300 p-2 w-full shadow-2xl ${classname}`}
      id="menu"
    >
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/techStack">Tech Stack</NavLink>
      <NavLink href="/blog">Blog</NavLink>
      <NavLink href="/contact">Contact</NavLink>
    </menu>
  ) : (
    <></>
  );

  return returnComp;
};

export default NavMenu;
