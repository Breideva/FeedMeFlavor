import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
        `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=8`
      );
      const data = await api.json();
      console.log(data);
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };
  return (
    <div className="bg-background text-text flex justify-center">
      <div className="w-8/12">
        <h1 className="font-bold text-5xl sm:text-5xl md:text-6xl lg:text-8xl pb-6 pl-6">
          Popular
        </h1>
        <Swiper
          className="bg-backgroundLight shadow-xl rounded-xl"
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
        >
          {popular.map((recipe) => (
            <SwiperSlide
              key={recipe.id}
              className="flex flex-col justify-center items-center p-6 text-xs sm:text-sm med:text-md lg:text-2xl"
            >
              <h2 className="absolute bg-backgroundLight w-3/4 py-6 text-center rounded-xl top:0 transition-all duration-300 hover:bg-background">
                {recipe.title}
              </h2>
              <img
                className="w-full rounded-xl my-6"
                src={recipe.image}
                alt={recipe.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
