import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router } from "react-router-dom";
import AllPages from "./pages/AllPages";

export default function App() {
  return (
    <Router className="font-tienne">
      <AllPages />
    </Router>
  );
}
