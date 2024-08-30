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
      <div className="w-9/12">
        <h1 className="font-bold text-5xl sm:text-5xl md:text-6xl lg:text-8xl pb-6 pl-6">
          Popular
        </h1>
        <Swiper
          className="bg-backgroundLight shadow-xl rounded-xl p-4"
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 }, // sm
            768: { slidesPerView: 3 }, // md
            1024: { slidesPerView: 3 }, // lg
            1280: { slidesPerView: 4 }, // xl
          }}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
        >
          {popular.map((recipe) => (
            <SwiperSlide
              key={recipe.id}
              className="flex flex-col justify-center items-center text-xs sm:text-sm med:text-md lg:text-lg xl:2xl cursor-pointer"
            >
              <h2 className="absolute bg-backgroundLight w-3/4 py-3 sm:py-1 md:py-1 lg:py-1 xl:py-4 text-center rounded-xl top:0 transition-all duration-300 hover:bg-background">
                {recipe.title}
              </h2>
              <img
                className="w-full rounded-xl m-6"
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
