import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import { Link } from "react-router-dom";

export default function FavoriteSlider() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  // const check = localStorage.getItem("popular");

  const getPopular = async () => {
    // if (check) {
    //   setPopular(JSON.parse(check));
    // } else {
    const apiKey = import.meta.env.VITE_API_KEY;
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=8`
    );
    const data = await api.json();
    // localStorage.setItem("popular", JSON.stringify(data.recipes));
    setPopular(data.recipes);
    // }
  };
  return (
    <div className="text-text flex justify-center select-none">
      <Swiper
        className="px-10"
        spaceBetween={10}
        slidesPerView={3.5}
        loop={true}
        centeredSlides={true}
        navigation
        mousewheel={true}
        breakpoints={{
          100: { slidesPerView: 1 }, // sm
          768: { slidesPerView: 1.5 }, // md
          1024: { slidesPerView: 2.5 }, // lg
          1280: { slidesPerView: 3.5 }, // xl
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay, Navigation, Mousewheel]}
      >
        {popular.map((items) => (
          <SwiperSlide key={items.id}>
            <Link className="flex cursor-pointer" to={"/items/" + items.id}>
              <img
                loading="lazy"
                className="w-full h-full hover:opacity-65 transition-all duration-300"
                src={items.image}
                alt={items.title}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
