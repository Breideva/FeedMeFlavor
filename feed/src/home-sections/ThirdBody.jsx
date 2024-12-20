import React from "react";
import banner from "../../public/assets/banner.png";
import MainButtons from "../components/MainButtons";
import { Link } from "react-router-dom";

export default function ThirdBody() {
  return (
    <div className="w-full bg-white flex flex-col justify-center items-center gap-16">
      <div className="w-9/12 h-full flex flex-col items-center text-center">
        <div className="w-full">
          <MainButtons />
        </div>
      </div>
      <div
        className="w-full h-full flex items-center justify-center py-20"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row h-full w-9/12 justify-between items-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl w-full lg:w-3/5 font-bold">
            Want to learn more about this website and how it was created?{" "}
          </h2>
          <Link to="/about" className="text-3xl sm:text-4xl lg:text-5xl text-primary bg-background p-2 rounded-md lg:p-0 lg:bg-transparent font-bold hover:underline">
            Learn About
          </Link>
        </div>
      </div>
    </div>
  );
}
