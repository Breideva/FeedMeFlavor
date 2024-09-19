import { Link } from "react-router-dom";
import { LuCoffee, LuApple } from "react-icons/lu";
import { TbGrill } from "react-icons/tb";
import { PiPepper } from "react-icons/pi";

export default function CategoryButtons() {
  return (
    <div className="bg-background text-text flex justify-center py-32 bg-gradient-to-br from-background to-secondary">
      <div className="w-9/12 justify-items-center text-center grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 text-7xl sm:text-8xl md:text-6xl lg:text-8xl xl:text-9xl">
        <Link
          to="/types/drinks"
          className="p-10 my-2 bg-backgroundLight shadow-xl rounded-xl transition-all duration-500 hover:bg-primary hover:m-0 hover:py-12"
        >
          <LuCoffee className="w-full" />
          <p className=" pt-2 mt-2 text-2xl sm:text-2xl md:text-xl lg:text-3xl xl:text-4xl font-bold">
            Drinks
          </p>
        </Link>
        <Link
          to="/types/grilled"
          className="p-10 my-2 bg-backgroundLight shadow-xl rounded-xl transition-all duration-500 hover:bg-primary hover:m-0 hover:py-12"
        >
          <TbGrill className="w-full" />
          <p className=" pt-2 mt-2 text-2xl sm:text-2xl md:text-xl lg:text-3xl xl:text-4xl font-bold">
            Grilled
          </p>
        </Link>
        <Link
          to="/types/fruits"
          className="p-10 my-2 bg-backgroundLight shadow-xl rounded-xl transition-all duration-500 hover:bg-primary hover:m-0 hover:py-12"
        >
          <LuApple className="w-full" />
          <p className=" pt-2 mt-2  text-2xl sm:text-2xl md:text-xl lg:text-3xl xl:text-4xl font-bold">
            Fruits
          </p>
        </Link>
        <Link
          to="/types/spicy"
          className="p-10 my-2 bg-backgroundLight shadow-xl rounded-xl transition-all duration-500 hover:bg-primary hover:m-0 hover:py-12"
        >
          <PiPepper className="w-full" />
          <p className=" pt-2 mt-2  text-2xl sm:text-2xl md:text-xl lg:text-3xl xl:text-4xl font-bold">
            Spicy
          </p>
        </Link>
      </div>
    </div>
  );
}
