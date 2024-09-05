import { Link } from "react-router-dom";
import Food from "../assets/Food-Image.png";

export default function MainButtons() {
  return (
    <div className="bg-background text-text flex justify-center pb-32">
      <div className="w-9/12 justify-items-center grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="bg-backgroundLight transition-all duration-500 rounded-xl shadow-xl border-b-8 border-transparent hover:border-primary">
          <Link to="/main/Sweet">
            <img   loading="lazy" className="w-full p-4  mb-2  rounded-3xl " src={Food} alt="" />
          </Link>
          <h3 className="px-4 text-3xl md:text-4xl lg:text-5xl">Sweet</h3>
          <p className="p-4 text-md md:text-lg lg:text-xl">
            Sweet foods provide a delightful burst of sugary flavor that
            comforts and pleases the senses.
          </p>
        </div>
        <div className="bg-backgroundLight transition-all duration-500 rounded-xl shadow-xl border-b-8 border-transparent hover:border-primary">
          <Link to="/main/Salty">
            <img  loading="lazy" className="w-full p-4 mb-2 rounded-3xl" src={Food} alt="" />{" "}
          </Link>
          <h3 className="px-4 text-3xl md:text-4xl lg:text-5xl">Salty</h3>
          <p className="p-4 text-md md:text-lg lg:text-xl">
            Salty foods deliver a sharp, savory taste that can be mouthwatering
            and satisfying.
          </p>
          
        </div>
      </div>
    </div>
  );
}
