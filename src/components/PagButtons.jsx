import React, { useEffect, useState } from "react";

const PagButtons = ({ setDb, db }) => {
  const [next, setNext] = useState(true);
  const [prev, setPrev] = useState(true);
  const info = db.info;

  useEffect(() => {
    !info?.prev ? setPrev(false) : setPrev(true);
    !info?.next ? setNext(false) : setNext(true);

    return () => {};
  }, [info]);

  const handleClick = (e) => {
    console.log(info);

    const fetchData = async (pag) => {
      const res = await fetch(pag);

      const json = await res.json();

      setDb(json);
    };

    if (e.target.id === "next") {
      fetchData(info.next);
    } else if (e.target.id === "prev") {
      fetchData(info.prev);
    }
  };

  return (
    <div className="relative w-[90%] pt-8 pb-12 m-auto max-w-[1180px] ">
      {prev && (
        <button
          id="prev"
          onClick={handleClick}
          className="absolute left-8 font-semibold text-[#2f2f40] outline-none cursor-pointer bg-[#4f4f651e] p-2 rounded-md border-[1px] border-[#B4C5B5] shadow-md"
        >
          prev
        </button>
      )}
      {next && (
        <button
          id="next"
          onClick={handleClick}
          className="absolute right-8 font-semibold text-[#2f2f40] cursor-pointer bg-[#4f4f651e] p-2 rounded-md border-[1px] border-[#B4C5B5] shadow-md"
        >
          next
        </button>
      )}
    </div>
  );
};

export default PagButtons;
