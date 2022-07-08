import Image from "next/image";

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
      <div className="box-content rounded-full  bg-blue-500 p-1">
        <Image
          width={300}
          height={300}
          src="/avatar.svg"
          alt=""
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Hero;
