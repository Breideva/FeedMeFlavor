import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MainCategories() {
  const params = useParams();
  const [main, setMain] = useState([]);

  const createMain = async (name) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=1&query=${name}`
    );
    const data = await api.json()
    setMain(data.results)
  };

  useEffect(() => {
    createMain(params.types)
  }, [params.types])


  return (
      <div className="bg-background h-screen flex justify-center">
        <div className="w-9/12">
          <h1 className="text-5xl">{params.types}</h1>
          <div className="grid grid-cols-2 gap-4 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {main.map((items) => (
              <div className="bg-backgroundLight shadow-xl rounded-lg p-4" key={items.id}>
                <h2 className="text-text text-2xl h-20">{items.title}</h2>
                <img className="w-full" src={items.image} alt={items.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
