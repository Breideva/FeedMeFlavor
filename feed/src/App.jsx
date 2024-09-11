import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router } from "react-router-dom";
import AllPages from "./pages/AllPages";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <Router className="font-tienne">
      <NavBar />
      <AllPages />
    </Router>
  );
}
