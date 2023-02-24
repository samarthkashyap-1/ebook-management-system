// import { useState } from "react";
import { Link } from "react-router-dom";
import cover from "../assets/alchemist.jpg";

const Card = ({ id, name, details }) => {
  return (
    <Link to={`/books/${id}`}>
      <div className="relative hover:scale-105 duration-200" id="pdf">
        <img src={cover} alt="book cover" />
        <div className=" absolute w-full h-1/2 bottom-0 left-0 bg-gradient-to-t from-black grid items-end pb-8 px-8 ">
          <p className=" text-2xl font-bold text-white break">
            {name.length > 20 ? name.slice(0, 20) + "..." : name}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
