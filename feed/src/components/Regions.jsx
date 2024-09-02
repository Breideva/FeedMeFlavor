import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
let answer = [];

export default function Region() {
  const [region, setRegion] = useState([]);

  const cuisines = [
    "African",
    "Asian",
    "American",
    "British",
    "Cajun",
    "Caribbean",
    "Chinese",
    "Eastern European",
    "European",
    "French",
    "German",
    "Greek",
    "Indian",
    "Irish",
    "Italian",
    "Japanese",
    "Jewish",
    "Korean",
    "Latin American",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Nordic",
    "Southern",
    "Spanish",
    "Thai",
    "Vietnamese",
  ];

  function findCuisine() {
    for (let i = 0; i < 1; i++) {
      let math = Math.floor(Math.random() * cuisines.length);
      answer.push(cuisines[math]);
    }
    return answer[0];
  }

  useEffect(() => {
    getRegion();
  }, []);

  const check = localStorage.getItem("region");

  const getRegion = async () => {
    if (check) {
      setRegion(JSON.parse(check));
    } else {
      const apiKey = import.meta.env.VITE_API_KEY;
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=6&cuisine=${findCuisine()}`
      );
      const data = await api.json();
      localStorage.setItem("region", JSON.stringify(data.results));
      setRegion(data.results);
    }
  };
  return (
    <div className="bg-background text-text flex justify-center pt-16">
      <div className="w-9/12">
        <h1 className="font-bold text-5xl sm:text-5xl md:text-6xl lg:text-8xl pb-6 pr-6 text-right">
          Regions
        </h1>
        <Swiper
          className="bg-backgroundLight shadow-xl rounded-xl p-4"
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 }, // sm
            768: { slidesPerView: 3 }, // md
            1024: { slidesPerView: 4 }, // md
          }}
          navigation
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Autoplay]}
        >
          {region.map((recipe) => (
            <SwiperSlide
              key={recipe.id}
              className="flex flex-col justify-center items-center text-md sm:text-sm med:text-md lg:text-lg xl:2xl cursor-pointer"
            >
              <h2 className="absolute bg-backgroundLight w-full py-4 sm:py-1 md:py-1 lg:py-1 xl:py-6 text-center bottom-6 rounded-b-lg transition-all duration-300 hover:bg-secondary ">
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
