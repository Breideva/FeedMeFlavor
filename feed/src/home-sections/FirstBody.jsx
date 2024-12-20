import IconsTab from "../components/IconsTab";
import Popular from "../components/Popular";
import svg1 from "../../public/assets/peak-1.svg";
import svg from "../../public/assets/peak-3.svg";
import { FaGlobeAmericas, FaBolt, FaCheckCircle } from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";

export default function FirstBody() {
  return (
    <div className="w-full bg-white flex flex-col justify-center items-center">
      <div
        className="w-full h-full py-20"
        style={{
          backgroundImage: `url(${svg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="w-9/12 flex flex-col items-center text-center gap-4">
        <div className="w-full lg:w-full flex flex-col gap-2" id="popular">
          <h2 className=" text-3xl sm:text-4xl  md:text-5xl xl:text-6xl font-bold">
            Find the right recipe for you
          </h2>
          <p className="text-lg md:text-xl">
            Finding the perfect recipe for you is effortless. You can use the
            search bar for specific dishes or explore curated suggestions from
            the navigation bar to discover new favorites. With just a few
            clicks, you'll have access to a variety of delicious options.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-12">
          <Popular />
          <Popular />
          <Popular />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-12">
          <IconsTab
            Icon={FaGlobeAmericas}
            header="Discover New Foods from Around the World"
            para="Find yourself in a world of flavors with recipes from diverse cultures. Explore unique dishes and ingredients you might never have tried before. With recipes an exciting way to expand your culinary horizons."
          />
          <IconsTab
            Icon={FaBolt}
            header="Experience it at Lightning Speed"
            para="Explore a wide range of new dishes in no time, offering unique and new dishes. Discover both familiar and new recipes to try and perfect, all with just a few clicks."
          />
          <IconsTab
            Icon={FaCheckCircle}
            header="Get all the Information you need with any Recipe"
            para="Simply click on any recipe to get all the information you need. Each recipe provides detailed instructions, ingredients, and tips for the perfect dish. Everything you need is just a click away"
          />
          <IconsTab
            Icon={GiHealthNormal}
            header="Making it easier to discover healthy and beneficial recipes"
            para="Find healthy and beneficial recipes with ease. Discover meals that nourish your body and support your well-being, complete with health scores to make your choice even easier."
          />
        </div>
      </div>
      <div
        className="w-full h-full py-40"
        style={{
          backgroundImage: `url(${svg1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
}
