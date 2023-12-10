import React from "react";

const Loader = ({ textColor }) => {
  return (
    <div
      className={`font-bold text-center p-8 m-auto w-full  h-full flex justify-center items-center ${textColor}`}
    >
      Cargando...
    </div>
  );
};

export default Loader;
