// import Food from "../../public/assets/Food-Image.png"
import { Link } from "react-router-dom";
import wideImage from "../../public/assets/wide-bg.avif";
import slimImage from "../../public/assets/slim-bg.png";
import { useEffect, useState } from "react";

export default function Header() {
  const [width, setWidth] = useState(false);

  const checkWidth = () => {
    let findWidth = window.innerWidth;
    setWidth(findWidth >= 1024);
  };

  useEffect(() => {
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  });

  return (
    <div
      id="body"
      className="flex flex-col w-full h-screen items-center justify-start bg-secondary relative font-martel"
    >
      <div
        className="w-full h-full flex items-center justify-center"
        style={{
          backgroundImage: width ? `url(${wideImage})` : `url(${slimImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" lg:w-9/12 h-full flex flex-col items-center justify-start relative">
          <div className="w-full h-full flex justify-center items-center text-center">
            <div className="w-3/4 lg:w-1/2 lg:h-full text-white flex flex-col justify-start lg:justify-center items-center gap-10">
              <h2 className="text-5xl sm:text-7xl xl:text-7xl font-bold">
                FOOD DONE YOUR WAY
              </h2>
              <Link
                to="/types/Recipes"
                className="p-2 px-3 border-2 bg-secondary  border-white w-fit font-bold text-sm sm:text-base md-text-lg lg:text-xl xl:text-2xl transition-all duration-300 hover:scale-105 hover:bg-primary"
              >
                Browse Recipes
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="h-1/4 w-full items-center justify-around bg-secondary flex text-white xl:text-4xl font-bold">
        <Link
          to="/types/grilled"
          className="w-fit h-fit flex items-center justify-center transition-all border-2 border-transparent duration-500 hover:underline"
        >
          Grilled Foods
        </Link>
        <Link
          to="/types/drinks"
          className="w-fit h-fit flex items-center justify-center transition-all border-2 border-transparent duration-500 hover:underline"
        >
          Drinks
        </Link>
        <Link
          to="/types/spicy"
          className="w-fit h-fit flex items-center justify-center transition-all border-2 border-transparent duration-500 hover:underline"
        >
          Spicy Foods
        </Link>
        <Link
          to="/types/fruits"
          className="w-fit h-fit flex items-center justify-center transition-all border-2 border-transparent duration-500 hover:underline"
        >
          Fruits
        </Link>
      </div> */}
      {/* <div
        className="h-full w-full mt-"
        style={{
          backgroundImage: `url(${wideImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full h-full flex flex-col justify-around items-center py-10 text-white text-center">
          <div className="flex flex-col w-full items-center gap-2">
            <h1 className="text-7xl font-black w-2/5">
              Find Your Favorite New Meal
            </h1>
            <p className="font-light text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing Blanditiis,
              nam.
            </p>
          </div>
          <div className="flex flex-col items-center gap-y-4">
            <h2 className="text-xl text-primary font-bold">Enjoy new cuisene at the touch of a button</h2>
            <button className="p-4 bg-primary text-4xl rounded-xl font-bold">
              View Recipes
            </button>
          </div>
        </div>
      </div>
      <div className=" lg:w-9/12 h-1/3 flex flex-col items-center justify-start relative">
        <div className="w-full h-full flex py-4">
          <div className="w-1/2">
            <h2 className="text-5xl font-semibold leading-[55px]">
              Enjoy one of your favorite snacks, or maybe discorver a new one{" "}
            </h2>
            <p>some of our favorite Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="w-1/2 flex justify-between items-center">
            <Popular />
            <Popular />
          </div>
        </div>
      </div> */}
    </div>
  );
}
