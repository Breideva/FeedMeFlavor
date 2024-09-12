import { useEffect, useState } from "react";
import Logo from "../assets/Logo.png";
import { Link, useFetcher } from "react-router-dom";
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

  return (
    <div className="bg-background flex justify-center w-full fixed top-0 left-0 z-20 text-text shadow-xl">
      <div className="w-9/12 flex items-center justify-between text-sm sm:text-base lg:text-lg xl:text-xl">
        <Link to="/"><img className="h-12 md:h-20 p-2" src={Logo} alt="Logo" /></Link>
        {linesOpen ? (
          <>
            <button onClick={mobileDropdown}>
              <TfiMenu className="text-2xl sm:text-3xl md:text-5xl" />
            </button>
            {moblieOpen && (
              <div className="bg-background absolute left-1/3 sm:right-1/2 top-full rounded-xl text-sm sm:text-base md:text-lg text-textLight">
                <ul className="px-2 border-2 border-textLight shadow-xl rounded-xl">
                  <li className="my-2 border-b-2 border-textLight transition-all duration-500 hover:text-text hover:border-primary">
                    <button
                      className="my-2 flex items-end"
                      onClick={toggleDropdown}
                      
                    >
                      Recipes
                      {isOpen ? (
                        <MdKeyboardArrowDown className="w-6" />
                      ) : (
                        <MdOutlineKeyboardArrowRight className=" w-6" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="bg-background absolute text-xs md:text-base -right-1/2 text-textLight">
                        <ul onClick={toggleDropdown} onMouseLeave={toggleDropdown} className="px-2 border-2 border-textLight shadow-xl rounded-xl">
                          <li className="my-2 border-b-2 border-textLight transition-all duration-500 hover:text-text hover:border-primary">
                            <Link to="/types/Appetizers">Appetizers</Link>
                          </li>
                          <li className="my-2 border-b-2 border-textLight transition-all duration-500 hover:text-text  hover:border-primary">
                            <Link to="/types/Desserts">Desserts</Link>
                          </li>
                          <li className="my-2 border-b-2 border-textLight transition-all duration-500 hover:text-text  hover:border-primary">
                            <Link to="/types/Beverages">Beverages</Link>
                          </li>
                          <li className="my-2 border-b-2 border-textLight transition-all duration-500 hover:text-text  hover:border-primary">
                            <Link to="/types/Snacks">Snacks</Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>
                  <li className="my-2 border-b-2 border-textLight transition-all duration-500 hover:text-text  hover:border-primary">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="my-2 border-b-2 border-textLight transition-all duration-500 hover:text-text  hover:border-primary">
                    <Link to="/types/Beverages">About</Link>
                  </li>
                </ul>
              </div>
            )}
          </>
        ) : (
          <div className="w-9/12 flex items-center justify-around">
            <div>
              <button className="my-2 flex items-end transition-all duration-500 hover:text-textLight" onClick={toggleDropdown}>
                Recipes
                {isOpen ? (
                  <MdKeyboardArrowDown className="w-6" />
                ) : (
                  <MdOutlineKeyboardArrowRight className=" w-6" />
                )}
              </button>
              {isOpen && (
                <div className="bg-background absolute text-sm md:text-lg text-textLight rounded-xl">
                  <ul onClick={toggleDropdown} onMouseLeave={toggleDropdown} className="px-2 border-2 border-textLight shadow-xl rounded-xl">
                    <li className="my-2 border-b-2 border-textLight transition-all duration-500 hover:text-text hover:border-primary">
                      <Link to="/types/Appetizers">Appetizers</Link>
                    </li>
                    <li className="my-2 border-b-2 border-textLight transition-all duration-500 hover:text-text  hover:border-primary">
                      <Link to="/types/Desserts">Desserts</Link>
                    </li>
                    <li className="my-2 border-b-2 border-textLight transition-all duration-500 hover:text-text  hover:border-primary">
                      <Link to="/types/Beverages">Beverages</Link>
                    </li>
                    <li className="my-2 border-b-2 border-textLight transition-all duration-500 hover:text-text  hover:border-primary">
                      <Link to="/types/Snacks">Snacks</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <h2 className="transition-all duration-500 hover:text-textLight"><Link to="/">Home</Link></h2>
            <h2 className="transition-all duration-500 hover:text-textLight"><Link to="/">About</Link></h2>
          </div>
        )}
        <Search />
      </div>
    </div>
  );
}
