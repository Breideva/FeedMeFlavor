import { Link } from "react-router-dom";
import { LuChefHat, LuCoffee, LuApple, LuCakeSlice } from "react-icons/lu";
import { createElement, useEffect } from "react";

export default function CategoryButtons() {
  return (
    <div className="bg-background text-text flex justify-center py-32">
      <div className="w-9/12 justify-items-center grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 text-7xl sm:text-8xl md:text-6xl lg:text-8xl xl:text-9xl text-text">
        <Link
          to="/types/Drinks"
          className="p-10 border-4 border-secondary bg-primary shadow-xl rounded-xl justify-items-center transition-all duration-500 hover:bg-secondary"
        >
          <LuCoffee />
          <p className=" border-t-4 border-secondary pt-2 mt-2  text-2xl sm:text-2xl md:text-xl lg:text-3xl xl:text-4xl font-bold transition-all duration-500 hover:border-text">
            Drinks
          </p>
        </Link>
        <Link
          to="/types/Drinks"
          className=" border-4 border-secondary p-10 bg-primary shadow-xl rounded-xl justify-items-center transition-all duration-500 hover:bg-secondary"
        >
          <LuChefHat />
          <p className="border-t-4 border-secondary pt-2 mt-2 text-2xl sm:text-2xl md:text-xl lg:text-3xl xl:text-4xl font-bold transition-all duration-500 hover:border-text">
            Drinks
          </p>
        </Link>
        <Link
          to="/types/Drinks"
          className="border-4 border-secondary p-10 bg-primary shadow-xl rounded-xl justify-items-center transition-all duration-500 hover:bg-secondary"
        >
          <LuApple />
          <p className="border-t-4 border-secondary pt-2 mt-2  text-2xl sm:text-2xl md:text-xl lg:text-3xl xl:text-4xl font-bold transition-all duration-500 hover:border-text">
            Drinks
          </p>
        </Link>
        <Link
          to="/types/Drinks"
          className="border-4 border-secondary p-10 bg-primary shadow-xl rounded-xl justify-items-center transition-all duration-500 hover:bg-secondary"
        >
          <LuCakeSlice />
          <p className="border-t-4 border-secondary pt-2 mt-2  text-2xl sm:text-2xl md:text-xl lg:text-3xl xl:text-4xl font-bold transition-all duration-500 hover:border-text">
            Drinks
          </p>
        </Link>
      </div>
    </div>
  );
}
