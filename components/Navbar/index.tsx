import Logo from "../Logo";
import NavLink from "../Link";
import { Icons } from "../Icon";
import Icon from "../Icon";
import { BsGithub } from "react-icons/bs";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiFillTwitterCircle } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <Logo />
      <div className="flex items-center">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/techStack">Tech Stack</NavLink>
        <NavLink href="/blog">Blog</NavLink>
        <NavLink href="/contact">Contact</NavLink>
        <div className="ml-4 flex items-center">
          <a href="https://github.com/probablyarth" target={"_blank"}>
            <BsGithub
              size={27}
              fill={"#A7A7A7"}
              className={"hover:fill-white mr-[5px]"}
            />
          </a>
          <a href="https://twitter.com/arthwashere" target={"_blank"}>
            <AiFillTwitterCircle
              size={30}
              fill={"#A7A7A7"}
              className={"hover:fill-white"}
            />
          </a>
          <a href="https://linkedin.com/in/probablyarth">
            <TiSocialLinkedinCircular
              size={34}
              fill={"#A7A7A7"}
              className={"hover:fill-white"}
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
