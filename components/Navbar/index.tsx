import Logo from "../Logo";
import NavLink from "../Link";
import { Icons } from "../Icon";
import Icon from "../Icon";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <Logo />
      <div className="flex">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/techStack">Tech Stack</NavLink>
        <NavLink href="/blog">Blog</NavLink>
        <NavLink href="/contact">Contact</NavLink>
        <Icon src={Icons.gh} />
        <Icon src={Icons.twt} />
        <Icon src={Icons.ln} />
      </div>
    </nav>
  );
};

export default Navbar;
