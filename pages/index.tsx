import type { NextPage } from "next";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="mx-10 md:mx-4 lg:mx-36 my-4 relative overflow-x-hidden">
      <Navbar />
    </div>
  );
};

export default Home;
