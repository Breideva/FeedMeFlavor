import {Routes, Route } from "react-router-dom";
import Home from "./Home";
import Categories from "./Categories";
import MainCategories from "./MainCategories";

export default function AllPages() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/types/:categories" element={<Categories/>} />
        <Route path="/main/:types" element={<MainCategories/>} />
      </Routes>
  )
}
