import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Recipes() {
  const params = useParams();
  const [recipe, setRecipe] = useState({});

  const getRecipe = async (name) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${name}/information?apiKey=${apiKey}`
    );
    const data = await api.json();
    setRecipe(data);
  };
  useEffect(() => {
    getRecipe(params.info);
  }, [params.info]);

  return (
    <div className="mix-h-screen flex justify-center text-text text-center bg-background">
      <div className="w-full flex flex-col items-center bg-secondary text-white">
        <div className="w-9/12">
          <div className="flex flex-col">
            <h1 className="text-3xl sm:text-4xl md:text-6xl xl:text-7xl mt-24 mb-8 font-semibold">
              {recipe.title}
            </h1>
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl"
              dangerouslySetInnerHTML={{ __html: recipe.summary }}
            />
            <div className="flex flex-col md:flex-row justify-center text-center items-center gap-4 my-8">
              <div className="bg-primary p-2 w-full md:w-1/3 lg:w-1/6 rounded-xl shadow-xl my-2 transition-all border-2 border-transparent duration-500 hover:m-0 hover:p-4 hover:border-primary hover:bg-secondary">
                <h3 className="text-sm">COOK TIME</h3>
                <h4 className="text-lg">{recipe.readyInMinutes + " MIN"}</h4>
              </div>
              <div className="bg-primary p-2 w-full md:w-1/3 lg:w-1/6 rounded-xl shadow-xl my-2 transition-all border-2 border-transparent duration-500 hover:m-0 hover:p-4 hover:border-primary hover:bg-secondary">
                <h3 className="text-sm">SERVES</h3>
                <h4 className="text-lg">{recipe.servings}</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap text-center justify-around items-center bg-background text-black rounded-xl shadow-xl p-4">
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-2/5">
            <img
              loading="lazy"
              className="rounded-xl"
              src={recipe.image}
              alt=""
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 text-lg md:text-sm lg:text-lg xl:text-2x">
            <h2 className="m-6 text-4xl sm:text-5xl xl:text-6xl">
              Ingredients
            </h2>
            {recipe.extendedIngredients && (
              <ol className="list-disc list-inside grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 justify-items-center ">
                {recipe.extendedIngredients.map((item, index) => (
                  <li className="text-sm sm:text-md lg:text-lg" key={index}>
                    {item.amount +
                      " " +
                      item.unit.charAt(0).toUpperCase() +
                      item.unit.slice(1) +
                      " " +
                      item.name.charAt(0).toUpperCase() +
                      item.name.slice(1)}
                  </li>
                ))}
              </ol>
            )}
          </div>
        </div>
        <div className="flex flex-col text-start justify-around items-center my-12">
          <h2 className="mb-6 text-4xl sm:text-5xl xl:text-6xl">
            Instructions
          </h2>
          <div id="list" className="text-base sm:text-lg md:text-xl w-3/4">
            <p dangerouslySetInnerHTML={{ __html: recipe.instructions }}></p>
          </div>
        </div>
      </div>
    </div>
  );
}
