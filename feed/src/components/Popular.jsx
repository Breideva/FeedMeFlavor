import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import { FaHeart } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

export default function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    // const check = localStorage.getItem("first");
    // if (check) {
    //   setPopular(JSON.parse(check));
    // } else {
    const apiKey = import.meta.env.VITE_API_KEY;
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=1`
    );
    const data = await api.json();
    // localStorage.setItem("first", JSON.stringify(data.recipes));
    setPopular(data.recipes);
    // }
  };
  return (
    <div className="text-text flex justify-center w-full h-full bg-transparent font-martel">
      <div className="w-full">
        {popular.map((items) => (
          <SwiperSlide key={items.id}>
            <Link
              className="flex flex-col justify-center items-start w-full h-full group"
              to={"/items/" + items.id}
            >
              <img
                loading="lazy"
                className="w-full group-hover:opacity-75 transition-all duration-300"
                src={items.image}
                alt={items.title}
              />
              <div className="flex flex-col md:flex-row items-center justify-between text-start py-2">
                <div className="w-3/4">
                  <p className="text-base font-light text-primary">
                    Ready in {items.readyInMinutes} minutes
                  </p>
                  <h2 className="xl:text-3xl font-semibold">{items.title}</h2>
                  <div className="flex flex-wrap gap-1 text-xl font-semibold">
                    {items.cuisines.map((item, index) => (
                      <div key={index}>
                        {item}
                        {index < items.cuisines.length - 1 ? "," : ""}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-1/4 flex items-center justify-center font-bold gap-1">
                  <h3 className="xl:text-4xl">{items.aggregateLikes}</h3>
                  <FaHeart className="text-xl text-red-600" />
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </div>
    </div>
  );
}
