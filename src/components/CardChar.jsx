import React from "react";

const CardChar = ({ character }) => {
  const { image, name, status } = character;

  let life =
    status === "Alive"
      ? "text-[#14FF00]"
      : status === "Dead"
      ? "text-[#FF1F1F]"
      : "text-[#00D1FF]";

  return (
    <li className="flex flex-col text-center min-h-[15rem] bg-[#43415F] rounded-xl overflow-hidden">
      <div className="w-full">
        <img src={image} alt="" />
      </div>
      <div className="flex justify-between px-3 py-4 items-center flex-1 gap-2">
        <span className="text-white w-[60%] font-semibold text-start">
          {name}
        </span>
        <span className={`${life} font-semibold`}>{status}</span>
      </div>
    </li>
  );
};

export default CardChar;
