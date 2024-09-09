import { Link } from "react-router-dom";
import { LuCoffee, LuApple } from "react-icons/lu";
import { TbGrill } from "react-icons/tb";
import { PiPepper } from "react-icons/pi";
import { createElement, useEffect } from "react";

export default function CategoryButtons() {
  return (
    <div className="bg-background text-text flex justify-center py-32">
      <div className="w-9/12 justify-items-center text-center grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 text-7xl sm:text-8xl md:text-6xl lg:text-8xl xl:text-9xl">
        <Link
          to="/types/Drinks"
          className="p-10  bg-secondary shadow-xl rounded-xl transition-all duration-500 hover:bg-primary"
        >
          <LuCoffee className="w-full" />
          <p className=" pt-2 mt-2 text-2xl sm:text-2xl md:text-xl lg:text-3xl xl:text-4xl font-bold transition-all duration-500 hover:border-text">
            Drinks
          </p>
        </Link>
        <Link
          to="/types/Grilled"
          className="  p-10 bg-secondary shadow-xl rounded-xl transition-all duration-500 hover:bg-primary"
        >
          <TbGrill className="w-full" />
          <p className=" pt-2 mt-2 text-2xl sm:text-2xl md:text-xl lg:text-3xl xl:text-4xl font-bold transition-all duration-500 hover:border-text">
            Grilled
          </p>
        </Link>
        <Link
          to="/types/Fruits"
          className=" p-10 bg-secondary shadow-xl rounded-xl transition-all duration-500 hover:bg-primary"
        >
          <LuApple className="w-full" />
          <p className=" pt-2 mt-2  text-2xl sm:text-2xl md:text-xl lg:text-3xl xl:text-4xl font-bold transition-all duration-500 hover:border-text">
            Fruits
          </p>
        </Link>
        <Link
          to="/types/Spicy"
          className=" p-10 bg-secondary shadow-xl rounded-xl transition-all duration-500 hover:bg-primary"
        >
          <PiPepper className="w-full" />
          <p className=" pt-2 mt-2  text-2xl sm:text-2xl md:text-xl lg:text-3xl xl:text-4xl font-bold transition-all duration-500 hover:border-text">
            Spicy
          </p>
        </Link>
      </div>
    </div>
  );
}
