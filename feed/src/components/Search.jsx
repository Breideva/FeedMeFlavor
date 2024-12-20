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
    <div className="w-full">
      <form
        className="flex w-full items-center bg-white rounded-xl"
        onSubmit={searchUp}
        action=""
      >
        <HiMiniMagnifyingGlass
          onClick={searchUp}
          className="text-lg xl:text-3xl p-1 text-text cursor-pointer"
        />
        <input
          className="bg-white w-full text-text font-light rounded-r-xl outline-none placeholder-text p-2 text-sm sm:text-base xl:text-xl"
          onChange={(e) => setLook(e.target.value)}
          value={look}
          placeholder="Search recipes..."
          type="text"
        />
      </form>
    </div>
  );
}
