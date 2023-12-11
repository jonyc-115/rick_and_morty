import React from "react";
import { fetchData } from "../helpers/fetchData";

const HomeBtn = ({ setLoading, setDb, setError }) => {
  const handleClick = async (e) => {
    try {
      setLoading(true);

      const data = await fetchData("https://rickandmortyapi.com/api/character");
      setDb(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <button
      onClick={handleClick}
      className="bg-[#4F4F65] p-2 rounded-lg text-white cursor-pointer shadow-buttons hover:bg-[#414157]"
    >
      go to home
    </button>
  );
};

export default HomeBtn;
