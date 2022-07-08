import { FC } from "react";
import Common from "../../Interfaces/Common";
import Link from "next/link";

interface NavLink extends Common {
  href: string;
}

const NavLink: FC<NavLink> = ({ children, href }) => {
  return (
    <div className="mx-6 text-lightContent hover:text-white">
      <Link href={href} tabIndex={-1}>
        {children}
      </Link>
    </div>
  );
};

export const BlogLink: FC<Common> = ({ children }) => {
  return (
    <div className="mx-6 text-lightContent hover:text-white">
      <a href={process.env.BLOG_URL}>{children}</a>
    </div>
  );
};

export default NavLink;
