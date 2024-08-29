import { useEffect, useState } from "react";

export default function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const check = localStorage.getItem("popular");

  const getPopular = async () => {
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const apiKey = import.meta.env.VITE_API_KEY;
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=4`
      );
      const data = await api.json();
      console.log(data);
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };
  return (
    <div>
      {popular.map((recipe) => (
        <div>
          <h1>{recipe.title}</h1>
          <img src={recipe.image} alt={recipe.title} />
        </div>
      ))}
    </div>
  );
}
