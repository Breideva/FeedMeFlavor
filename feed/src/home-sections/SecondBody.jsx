import React from "react";
import FavoriteSlider from "../components/FavoriteSlider";
import Food from "../../public/assets/Food-Image.png";
import svg from "../../public/assets/peak-2.svg";
import { Link } from "react-router-dom";

export default function SecondBody() {
  return (
    <div className="w-full bg-secondary flex flex-col justify-center items-center text-white">
      <div className="w-9/12 flex flex-col items-center text-center gap-4">
        <div className="w-full py-12 gap-2">
          <h2 className=" text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold">
            Check out some of our Favorites
          </h2>
          <p className="text-lg pb-12 md:text-xl">
            View some of our favorites and explore delicious dishes you'll love.
            These recipes are sure to inspire your next cooking adventure!{" "}
          </p>
          <FavoriteSlider />
        </div>
        <div className="w-full flex flex-col xl:flex-row items-center py-12 gap-12">
          <div className="w-full xl:w-1/2 flex flex-col items-center gap-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold ">
              Cooking promotes balance
            </h2>
            <p className="text-sm sm:text-base font-normal ">
              When you cook your own meals it allows you to create a balanced,
              nutritious foundation for your health. The dishes you prepare at
              home can be crafted with intention, ensuring that every ingredient
              works together to support your well-being.
            </p>
            <div className="flex justify-center w-full items-center gap-2 py-4">
              <div className="w-1/3 h-1 bg-primary"></div>
              <div className="h-4 w-4 rounded-full bg-primary"></div>
              <div className="w-1/3 h-1 bg-primary"></div>
            </div>
            <h3 className="text-base sm:text-xl xl:text-2xl font-normal">
              Each dish you prepare offers a chance to experiment with new
              recipes and cooking techniques, turning every meal into a creative
              and enjoyable experience. By exploring different ingredients and
              methods, your find fun, tasty, and affordable ways to eat.
            </h3>
            <Link
              to="/types/Recipes"
              className="p-2 px-3 mt-4 bg-primary w-fit font-bold text-2xl border-2 border-transparent transition-all duration-300 hover:border-primary hover:bg-secondary hover:scale-105"
            >
              Try Recipes
            </Link>
          </div>
          <div className="w-full md:w-3/4 xl:w-1/2">
            <img
              className="w-full hover:scale-105 transition-all duration-300"
              src={Food}
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        className="w-full h-full py-40"
        style={{
          backgroundImage: `url(${svg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
}
