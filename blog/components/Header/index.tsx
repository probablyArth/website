import Logo from "../Logo";

const Header = () => {
  return (
    <nav className="flex items-center justify-center">
      <div className="flex items-end">
        <Logo classname="md:text-5xl" />
        <h1 className="text-xl font-poorStory px-2 md:text-3xl">Blog</h1>
      </div>
    </nav>
  );
};

export default Header;
