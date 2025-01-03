import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Categories from "./Categories";
import Recipes from "./Recipes";
import About from "./About";

export default function AllPages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/types/:categories" element={<Categories />} />
      <Route path="/items/:info" element={<Recipes />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
