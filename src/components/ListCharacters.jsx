import React from "react";
import CardChar from "./CardChar";

const ListCharacters = ({ db }) => {
  const results = db ? db.results : [];

  return (
    <ul className="grid px-4 pt-4 grid-cols-fluid gap-7 justify-items-center">
      {results?.map((el) => {
        return <CardChar key={el.id} character={el} />;
      })}
    </ul>
  );
};

export default ListCharacters;
