/* eslint-disable @next/next/no-img-element */
const Hero = () => {
  return (
    <div className="flex justify-between items-center flex-col-reverse md:flex-row pb-8 md:pt-20 my-2">
      <h2 className="md:text-5xl md:leading-snug font-bold">
        Hi 👋,
        <br /> My name is <br />
        <span className="text-blue-500">Arth</span>
        <br /> I build fullstack webapps
      </h2>{" "}
      <img
        src="/avatar.svg"
        alt=""
        className="avatar md:max-w-xs max-w-[200px]"
      />
    </div>
  );
};

export default Hero;
