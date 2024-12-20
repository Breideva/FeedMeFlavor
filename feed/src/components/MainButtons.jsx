import { Link } from "react-router-dom";
import Food from "../../public/assets/Food-Image.png";

export default function MainButtons() {
  return (
    <div className="text-text flex justify-center font-martel">
      <div className="justify-items-center grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="transition-all duration-500 rounded-xl shadow-2xl border-b-8 border-transparent hover:scale-105 hover:border-primary flex flex-col justify-center items-center">
          <Link to="/types/sweet">
            <img
              loading="lazy"
              className="w-full p-4 mb-2 rounded-3xl"
              src={Food}
              alt=""
            />
          </Link>
          <h3 className="px-4 text-3xl md:text-4xl lg:text-5xl font-bold border-b-2 border-black pb-1">
            Sweet
          </h3>
          <p className="p-4 text-md md:text-lg lg:text-xl w-3/4">
            Sweet foods provide a delightful burst of sugary flavor that
            comforts and pleases the senses.
          </p>
        </div>
        <div className="transition-all duration-500 rounded-xl shadow-2xl border-b-8 border-transparent hover:scale-105 hover:border-primary flex flex-col justify-center items-center">
          <Link to="/types/savory">
            <img
              loading="lazy"
              className="w-full p-4 mb-2 rounded-3xl"
              src={Food}
              alt=""
            />{" "}
          </Link>
          <h3 className="px-4 text-3xl md:text-4xl lg:text-5xl font-bold border-b-2 border-black pb-1">
            Salty
          </h3>
          <p className="p-4 text-md md:text-lg lg:text-xl w-3/4">
            Salty foods deliver a sharp, savory taste that can be mouthwatering
            and satisfying.
          </p>
        </div>
      </div>
    </div>
  );
}
