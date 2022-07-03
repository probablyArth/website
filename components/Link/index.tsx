import { FC } from "react";
import Common from "../../Interfaces/Common";
import Link from "next/link";

interface NavLink extends Common {
  href: string;
}

const NavLink: FC<NavLink> = ({ children, href }) => {
  return (
    <div className="mx-6 text-lightContent">
      <Link href={href}>{children}</Link>
    </div>
  );
};

export default NavLink;
