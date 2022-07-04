import { FC } from "react";
import Common from "../../Interfaces/Common";
import NavLink from "../Link";

const NavMenu: FC<Common> = ({ classname }) => {
  return (
    <menu
      className={`self-center flex flex-col bg-solidHeading text-center rounded-sm transition-all duration-300 p-2 w-2/3 ${classname}`}
      id="menu"
    >
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/techStack">Tech Stack</NavLink>
      <NavLink href="/blog">Blog</NavLink>
      <NavLink href="/contact">Contact</NavLink>
    </menu>
  );
};

export default NavMenu;