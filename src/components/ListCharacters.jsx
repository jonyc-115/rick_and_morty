import React from "react";

const ListCharacters = () => {
  return (
    <ul className="grid px-4 py-6 grid-cols-fluid gap-7 justify-items-center">
      {results?.map((el) => {
        let life =
          el.status === "Alive"
            ? "text-[#14FF00]"
            : el.status === "Dead"
            ? "text-[#FF1F1F]"
            : "text-[#00D1FF]";

        return (
          <li
            className="flex flex-col text-center min-h-[15rem] bg-[#43415F] rounded-xl overflow-hidden"
            key={el.id}
          >
            <div>
              <img src={el.image} alt="" />
            </div>
            <div className="flex justify-between px-3 py-4 items-center flex-1">
              <span className="text-white font-semibold">{el.name}</span>
              <span className={`${life} font-semibold`}>{el.status}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ListCharacters;
