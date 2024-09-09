import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function MainCategories() {
  const params = useParams();
  const [main, setMain] = useState([]);

  const createMain = async (name) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=1&query=${name}`
    );
    const data = await api.json();
    setMain(data.results);
  };

  useEffect(() => {
    createMain(params.categories);
  }, [params.categories]);

  return (
    <div className="bg-background flex justify-center text-primary ">
      <div className="w-9/12">
        <h1 className="text-8xl font-bold w-fit mt-8">{params.categories}</h1>
        <div className="grid grid-cols-1 gap-4 justify-items-center xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {main.map((items) => (
            <Link
              to={"/items/" + items.id}
              className="bg-backgroundLight shadow-xl rounded-lg p-4"
              key={items.id}
            >
              <h2 className="text-text text-lg lg:text-2xl  h-20">
                {items.title}
              </h2>
              <img className="w-fit" src={items.image} alt={items.title} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
