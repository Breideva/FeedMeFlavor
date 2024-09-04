import Food from "../assets/Food-Image.png";

export default function Header() {
  return (
    <div className="flex items-center justify-center bg-background">
      <div className="w-9/12 flex h-screen items-center relative">
        <div className="text-text flex flex-col gap-6 z-10">
          <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl w-1/4">
            Find Amazing Recipes
          </h1>
          <p className="text-xs sm:text-sm med:text-md lg:text-xl w-3/4">
            For every food and diet
          </p>
          <button className="text-sm sm:text-md md:text-lg lg:text-2xl w-4/6 bg-primary p-4 rounded-lg shadow-lg transition-all duration-700 hover:bg-secondary">
            Show me Burgers
          </button>
        </div>
        <img
          className="h-1/3 sm:h-1/2 md:h-1/2 lg:h-1/2 xl:h-1/2 absolute top-0 right-0"
          src={Food}
          alt="Illustration of people eating"
        />
      </div>
    </div>
  );
}
