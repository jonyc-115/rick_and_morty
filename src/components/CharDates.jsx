import React from "react";

const CharDates = ({ character }) => {
  const { species, location, type, origin, status, gender } = character;
  const name = location ? location.name : "";
  const originName = origin ? origin.name : "";

  let life =
    status === "Alive"
      ? "text-[#14FF00]"
      : status === "Dead"
      ? "text-[#FF1F1F]"
      : "text-[#00D1FF]";

  return (
    <>
      <div className="flex justify-between ">
        <div className="flex gap-2">
          <span className="font-semibold text-[#b9b7b7]">Gender:</span>
          <span className="font-bold text-white">{gender}</span>
        </div>
        <div className="flex gap-2">
          <span className="font-semibold text-[#b9b7b7]">Status:</span>
          <span className={`font-bold ${life}`}>{status}</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <span className="font-semibold text-[#b9b7b7]">Specie:</span>
          <span className="font-bold text-white">{species}</span>
        </div>
        {type && (
          <div className="flex gap-2">
            <span className="font-semibold text-[#b9b7b7]">Type:</span>
            <span className="font-bold text-white"> {type} </span>
          </div>
        )}
      </div>
      <div className="">
        <span className="font-semibold text-[#b9b7b7]">
          Last known location:
        </span>
        <br />
        <span className="font-bold text-white">{name}</span>
      </div>
      <div className="">
        <span className="font-semibold text-[#b9b7b7]">from:</span>
        <br />
        <span className="font-bold text-white">{originName}</span>
      </div>
    </>
  );
};

export default CharDates;
