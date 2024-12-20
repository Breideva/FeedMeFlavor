import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  MdKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { TfiMenu } from "react-icons/tfi";
import Search from "./Search";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [linesOpen, setLinesOpen] = useState();
  const [moblieOpen, setMobileOpen] = useState(false);
  const [position, setPosition] = useState(0);

  const windowChange = () => {
    setPosition(window.scrollY);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleMobile = () => {
    setLinesOpen(!linesOpen);
  };
  const mobileDropdown = () => {
    setMobileOpen(!moblieOpen);
  };

  const checkSize = (actualScreen) => {
    let screenWidth = window.innerWidth;
    setLinesOpen((actualScreen = screenWidth <= 850));
  };

  useEffect(() => {
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  window.addEventListener("scroll", windowChange);

  return (
    <div
      className={`flex justify-center w-full fixed top-0 left-0 z-20 py-2 text-white transition-all duration-500
        ${position === 0 ? "bg-transparent" : "bg-secondary"}`}
    >
      <div className="w-9/12 flex items-center justify-between text-sm sm:text-base lg:text-lg xl:text-xl">
        {/* <Link to="/">
          <img className="h-12 md:h-20 p-2" src={Logo} alt="Logo" />
        </Link> */}
        {linesOpen ? (
          <div className="w-full flex justify-between items-center">
            <div className="w-1/4">
              <button onClick={mobileDropdown}>
                <TfiMenu className="text-2xl sm:text-3xl md:text-4xl" />
              </button>
              {moblieOpen && (
                <div className="bg-white absolute text-sm sm:text-base md:text-lg text-black">
                  <ul className="flex flex-col items-start px-2 border-2 border-background">
                    <li className="py-1 px-2 transition-all duration-500  hover:border-black border-b">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="py-1 px-2 transition-all duration-500  hover:border-black border-b">
                      <Link to="/about">About</Link>
                    </li>
                    <li className="py-1 px-2 transition-all duration-500 hover:border-black border-b">
                      <button
                        className="flex items-center"
                        onClick={toggleDropdown}
                      >
                        Recipes
                        {isOpen ? (
                          <MdKeyboardArrowDown className="" />
                        ) : (
                          <MdOutlineKeyboardArrowRight className="" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="bg-white absolute text-xs md:text-sm -right-1/2">
                          <ul
                            onClick={toggleDropdown}
                            onMouseLeave={toggleDropdown}
                            className="border border-textLight"
                          >
                            <li className="py-1 px-2 transition-all duration-500 hover:bg-background">
                              <Link to="/types/Appetizers">Appetizers</Link>
                            </li>
                            <li className="py-1 px-2 transition-all duration-500  hover:bg-background">
                              <Link to="/types/Desserts">Desserts</Link>
                            </li>
                            <li className="py-1 px-2 transition-all duration-500  hover:bg-background">
                              <Link to="/types/Beverages">Beverages</Link>
                            </li>
                            <li className="py-1 px-2 transition-all duration-500  hover:bg-background">
                              <Link to="/types/Snacks">Snacks</Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="w-3/4">
              <Search />
            </div>
          </div>
        ) : (
          <div className="w-full flex items-center justify-between">
            <div>
              <Link to="/" className="font-bold italic text-lg xl:text-4xl">
                FeedMeFlavor
              </Link>
            </div>
            <div className="w-1/2">
              <Search />
            </div>
            <h2 className="transition-all text-sm xl:text-xl duration-500 hover:text-textLight">
              <Link to="/about">About</Link>
            </h2>
            <div>
              <button
                className="flex items-center text-sm xl:text-xl transition-all duration-500 hover:text-textLight"
                onClick={toggleDropdown}
              >
                Recipes
                {isOpen ? (
                  <MdKeyboardArrowDown className="text-sm xl:text-lg" />
                ) : (
                  <MdOutlineKeyboardArrowRight className="text-sm xl:text-lg" />
                )}
              </button>
              {isOpen && (
                <div className="bg-white absolute text-sm md:text-lg text-black mt-2 border-2 border-background">
                  <ul
                    onClick={toggleDropdown}
                    onMouseLeave={toggleDropdown}
                    className=""
                  >
                    <li className="py-1 px-2 transition-all duration-500 hover:bg-background">
                      <Link to="/types/appetizers">Appetizers</Link>
                    </li>
                    <li className="py-1 px-2 transition-all duration-500  hover:bg-background">
                      <Link to="/types/desserts">Desserts</Link>
                    </li>
                    <li className="py-1 px-2 transition-all duration-500  hover:bg-background">
                      <Link to="/types/beverages">Beverages</Link>
                    </li>
                    <li className="py-1 px-2 transition-all duration-500  hover:bg-background">
                      <Link to="/types/snacks">Snacks</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
