import Logo from "../Logo";
import NavLink, { BlogLink } from "../Link";
import { BsGithub } from "react-icons/bs";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiFillTwitterCircle } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import NavMenu from "./NavMenu";
import { useState } from "react";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <nav className="flex flex-col">
        <div className="flex items-center justify-between md:justify-between">
          <Logo />
          <div className="md:flex items-center hidden">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/techStack">Tech Stack</NavLink>
            <BlogLink>Blog</BlogLink>
            <NavLink href="/contact">Contact</NavLink>
            <div className="ml-4 flex items-center">
              <a
                href="https://github.com/probablyarth"
                target={"_blank"}
                rel="noreferrer"
              >
                <BsGithub
                  size={27}
                  fill={"#A7A7A7"}
                  className={"hover:fill-white mr-[5px]"}
                />
              </a>
              <a
                href="https://twitter.com/arthwashere"
                target={"_blank"}
                rel="noreferrer"
              >
                <AiFillTwitterCircle
                  size={30}
                  fill={"#A7A7A7"}
                  className={"hover:fill-white"}
                />
              </a>
              <a href="https://linkedin.com/in/probablyarth" rel="noreferrer">
                <TiSocialLinkedinCircular
                  size={34}
                  fill={"#A7A7A7"}
                  className={"hover:fill-white"}
                />
              </a>
            </div>
          </div>
          <GiHamburgerMenu
            size={30}
            fill="#fff"
            onClick={() => setClicked((clicked) => !clicked)}
            className="z-10 md:hidden"
          />
        </div>
        <NavMenu
          classname={clicked ? `translate-x-0` : `translate-x-[2000px]`}
        />
      </nav>
    </>
  );
};

export default Navbar;
