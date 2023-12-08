import React from "react";
import { Link } from "react-router-dom";

const CardChar = ({ character }) => {
  const { id, image, name, status, gender, species } = character;

  let life =
    status === "Alive"
      ? "text-[#14FF00]"
      : status === "Dead"
      ? "text-[#FF1F1F]"
      : "text-[#00D1FF]";

  return (
    <Link to={`/character/${id}`}>
      <li className="flex max-w-[16rem] flex-col text-center min-h-[15rem] bg-[#43415F] rounded-xl overflow-hidden  tablet:min-h-[23rem] transition-all hover:shadow-cards hover:scale-105">
        <div className="w-full ">
          <img src={image} alt="" />
        </div>
        <div className="px-3 py-4 flex-1 items-center gap-2">
          <h3 className=" text-white text-[1.3rem] font-black text-start leading-6 ">
            {name}
          </h3>

          <div className="flex justify-between">
            <p className={` font-semibold text-start text-white`}>
              {gender} - <span className={`${life}`}> {status} </span>
            </p>
            <span className="text-white font-semibold">{species}</span>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default CardChar;
