import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
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
    const apiKey = import.meta.env.VITE_API_KEY;
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=8`
    );
    const data = await api.json();
    setPopular(data.recipes);
  };
  return (
    <div className="bg-background text-text flex justify-center bg-gradient-to-br from-background to-secondary">
      <div className="w-9/12">
        <h1 className="font-bold text-5xl sm:text-5xl md:text-6xl lg:text-8xl pb-6 pl-6">
          Popular
        </h1>
        <Swiper
          className="p-2"
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 }, // sm
            768: { slidesPerView: 3 }, // md
            1024: { slidesPerView: 3 }, // lg
            1280: { slidesPerView: 4 }, // xl
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
        >
          {popular.map((items) => (
            <SwiperSlide key={items.id}>
              <Link
                className="flex flex-col justify-center items-center text-md med:text-md lg:text-lg xl:2xl cursor-pointer"
                to={"/items/" + items.id}
              >
                <h2 className="absolute bg-backgroundLight w-3/4 py-1 text-center rounded-xl first-letter:transition-all duration-300 hover:bg-secondary">
                  {items.title}
                </h2>
                <img
                  loading="lazy"
                  className="w-full rounded-xl m-6"
                  src={items.image}
                  alt={items.title}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
