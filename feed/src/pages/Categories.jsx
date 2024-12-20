import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import banner from "../../public/assets/recipe-banner.png";

export default function Categories() {
  const params = useParams();
  const [categories, setCategories] = useState([]);

  const makeCategories = async (name) => {
    // const check = localStorage.getItem("cate");
    // if (check) {
    //   setCategories(JSON.parse(check));
    // } else {
    const apiKey = import.meta.env.VITE_API_KEY;
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=12&tags=${name}`
    );
    const data = await api.json();
    // localStorage.setItem("cate", JSON.stringify(data.recipes));
    setCategories(data.recipes);
    // }
  };

  useEffect(() => {
    makeCategories(params.categories);
  }, [params.categories]);

  return (
    <div className="bg-secondary min-h-screen flex justify-center pb-8 text-white">
      <div className="w-9/12">
        <div
          className="w-full bg-secondary flex justify-center items-center mt-20 mb-2 h-20 md:h-28 xl:h-40"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className=" text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold">
            {params.categories.charAt(0).toUpperCase() +
              params.categories.slice(1)}
          </h1>
          <div className=""></div>
        </div>
        <div className="grid grid-cols-1 justify-items-center bg-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center">
          {categories.map((items) => (
            <Link
              to={"/items/" + items.id}
              className="bg-backgroundLight w-full p-4 bg-secondary text-white hover:bg-opacity-85 transition-all duration-300"
              key={items.id}
            >
              <img
                loading="lazy"
                className="w-full"
                src={items.image}
                alt={items.title}
              />
              <h2 className="text-2xl font-semibold">{items.title}</h2>
              <div className="flex w-full items-center justify-center gap-2">
                <h3 className="text-xl sm:text-xl md:text-lg xl:text-xl font-light">
                  Serves:
                </h3>
                <p className="text-xl sm:text-xl md:text-lg xl:text-xl font-medium">
                  {items.servings}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
