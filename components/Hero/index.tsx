/* eslint-disable @next/next/no-img-element */
const Hero = () => {
  return (
    <div className="flex justify-between items-center flex-col md:flex-row">
      <h2>
        Hi 👋, My name is <span>Arth</span> I build fullstack webapps
      </h2>{" "}
      <img src="/avatar.svg" alt="" className="avatar" />
    </div>
  );
};

export default Hero;
