import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Categories() {
  const params = useParams();
  const [categories, setCategories] = useState([]);

  const makeCategories = async (name) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=1&query=${name}`
    );
    const data = await api.json();
    setCategories(data.results);
  };

  useEffect(() => {
    makeCategories(params.categories);
  }, [params.categories]);

  return (
    <div className="bg-background flex justify-center text-primary ">
      <div className="w-9/12">
        <h1 className="text-8xl font-bold w-fit mt-24 mb-8">{params.categories}</h1>
        <div className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center">
          {categories.map((items) => (
            <Link to={"/items/" + items.id} className="bg-backgroundLight shadow-xl rounded-lg p-4 w-full" key={items.id}>
              <h2 className="text-text text-xl h-20">{items.title}</h2>
              <img   loading="lazy" className="w-full" src={items.image} alt={items.title} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
