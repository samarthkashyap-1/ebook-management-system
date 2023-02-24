// import { useState } from "react";
import { Link } from "react-router-dom";
import cover from "../assets/alchemist.jpg";

const Card = ({id, name, details }) => {
  return (
    <Link to={`/books/${id}`}>
      <div className="relative" id="pdf">
        <img src={cover} alt="book cover" />
        <div className=" absolute w-full h-1/2 bottom-0 left-0 bg-gradient-to-t from-black grid items-end pb-8 px-8 ">
          <p className=" text-3xl font-bold text-white break">{name}</p>
          <p className="text-white break-all">{details}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
