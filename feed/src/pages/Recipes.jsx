import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Recipes() {
  const params = useParams();
  const [recipe, setRecipe] = useState({});

  const check = localStorage.getItem("recipe");

  const getRecipe = async (name) => {
    if (check) {
      setRecipe(JSON.parse(check));
    } else {
      const apiKey = import.meta.env.VITE_API_KEY;
      const api = await fetch(
        `https://api.spoonacular.com/recipes/${name}/information?apiKey=${apiKey}&number=1`
      );
      const data = await api.json();
      setRecipe(data);
      localStorage.setItem("recipe", JSON.stringify(data));
      data.extendedIngredients.map((item) => console.log(item.name));
    }
  };
  useEffect(() => {
    getRecipe(params.info);
  }, [params.info]);

  return (
    <div className="bg-background flex justify-center text-text text-center">
      <div className="w-9/12">
        <div className="flex flex-col">
          <h1 className="text-7xl mt-24 mb-8">{recipe.title}</h1>
          <p
            className="text-xl"
            dangerouslySetInnerHTML={{ __html: recipe.summary }}
          />
          <div className="flex justify-center text-center items-center gap-4 my-8 ">
            <div className="bg-secondary p-2 w-1/6 rounded-xl shadow-xl my-2 transition-all duration-500 hover:m-0 hover:p-4  hover:bg-primary">
              <h3 className="text-sm">COOK TIME</h3>
              <h4 className="text-lg">{recipe.readyInMinutes + " MIN"}</h4>
            </div>
            <div className="bg-secondary p-2 w-1/6 rounded-xl shadow-xl my-2 transition-all duration-500 hover:m-0 hover:p-4 hover:bg-primary">
              <h3 className="text-sm">SERVES</h3>
              <h4 className="text-lg">{recipe.servings}</h4>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap text-center justify-around items-center bg-backgroundLight rounded-xl shadow-xl p-4">
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-2/5">
            <img
              loading="lazy"
              className="rounded-xl"
              src={recipe.image}
              alt=""
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 text-lg md:text-sm lg:text-lg xl:text-2x">
            <h2 className="m-6 text-5xl">Ingredients</h2>
            {recipe.extendedIngredients && (
              <ol className="list-disc list-inside grid grid-cols-4 md:grid-cols-2 gap-4 justify-items-center ">
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
        <div className="flex flex-col text-center justify-around items-center my-12">
          <h2 className="mb-6 text-5xl">Instructions</h2>
          <p
            className="text-xl w-full md:w-3/4"
            dangerouslySetInnerHTML={{ __html: recipe.instructions }}
          />
        </div>
      </div>
    </div>
  );
}
