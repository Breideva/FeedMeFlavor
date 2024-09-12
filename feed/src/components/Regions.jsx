import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
let answer = [];

export default function Region() {
  const [region, setRegion] = useState([]);

  const cuisines = [
    "african",
    "asian",
    "american",
    "british",
    "cajun",
    "caribbean",
    "chinese",
    "eastern european",
    "european",
    "french",
    "german",
    "greek",
    "indian",
    "irish",
    "italian",
    "japanese",
    "jewish",
    "korean",
    "latin american",
    "mediterranean",
    "mexican",
    "middle eastern",
    "nordic",
    "southern",
    "spanish",
    "thai",
    "vietnamese",
  ];

  function findCuisine() {
    for (let i = 0; i < 1; i++) {
      let math = Math.floor(Math.random() * cuisines.length);
      answer.push(cuisines[math]);
    }
    return answer[0]
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
      console.log(findCuisine());
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=8&tags=${findCuisine()}`
      );
      const data = await api.json();
      localStorage.setItem("region", JSON.stringify(data.recipes));
      setRegion(data.recipes);
    }
  };
  return (
    <div className="bg-background text-text flex justify-center pt-16">
      <div className="w-9/12">
        <h1 className="font-bold text-5xl sm:text-5xl md:text-6xl lg:text-8xl pb-6 pr-6 text-right">
          Regions <span className="font-extralight"> - {findCuisine(answer).charAt(0).toUpperCase() + findCuisine(answer).slice(1)}</span>
        </h1>
        <Swiper
          className="p-2"
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 }, // sm
            768: { slidesPerView: 3 }, // md
            1024: { slidesPerView: 4 }, // md
          }}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {region.map((items) => (
            <SwiperSlide key={items.id}>
              <Link
                className="flex flex-col justify-center items-center text-md med:text-md lg:text-lg xl:2xl cursor-pointer"
                to={"/items/" + items.id}
              >
                <div className="absolute bg-backgroundLight w-full py-4 text-center bottom-6 rounded-b-lg transition-all duration-300 hover:bg-secondary">
                  <h2>{items.title}</h2>
                 
                </div>
                <img
                  loading="lazy"
                  className="w-full rounded-xl my-6"
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
