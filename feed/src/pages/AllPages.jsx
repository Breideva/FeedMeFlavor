import {Routes, Route } from "react-router-dom";
import Home from "./Home";
import CategoryButtons from "../components/CategoryButtons";
import Categories from "./Categories";

export default function AllPages() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/types/:categories" element={<Categories/>} />
      </Routes>
  )
}
