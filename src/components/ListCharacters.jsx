import React from "react";
import CardChar from "./CardChar";

const ListCharacters = ({ results }) => {
  return (
    <ul className="grid px-4 py-6 grid-cols-fluid gap-7 justify-items-center">
      {results?.map((el) => {
        return <CardChar key={el.id} character={el} />;
      })}
    </ul>
  );
};

export default ListCharacters;
