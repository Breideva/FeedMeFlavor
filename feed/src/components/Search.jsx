import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

export default function Search() {
  const navigate = useNavigate();
  const [look, setLook] = useState("");

  const searchUp = (e) => {
    e.preventDefault();
    navigate("/types/" + look);
  };

  return (
    <div>
      <form className="flex items-center bg-backgroundLight rounded-xl" onSubmit={searchUp} action="">
        <HiMiniMagnifyingGlass onClick={searchUp} className="text-3xl text-text  cursor-pointer" />
        <input
          className="bg-backgroundLight text-text rounded-r-xl outline-none md:p-2 placeholder-textLight transition-all duration-700 focus:bg-secondary"
          onChange={(e) => setLook(e.target.value)}
          value={look}
          placeholder="Search..."
          type="text"
        />
      </form>
    </div>
  );
}
