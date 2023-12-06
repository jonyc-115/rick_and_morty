import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CharacterScreen = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  console.log(character);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );

      const json = await res.json();

      setCharacter(json);
    };

    fetchData();
  }, []);

  const { gender, species, name, image, status, type, origin, location } =
    character;

  console.log(location);

  let life =
    status === "Alive"
      ? "text-[#14FF00]"
      : status === "Dead"
      ? "text-[#FF1F1F]"
      : "text-[#00D1FF]";

  return (
    <main className=" min-h-screen bg-[#43415f]">
      <div>
        <img src={image} alt={name} />
      </div>
      <div className="relative px-6 mt-[-1rem] bg-[#43415F]  rounded-t-2xl flex flex-col gap-2">
        <h3 className="text-center py-6 font-black text-3xl text-white">
          {name}
        </h3>
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
        <div className="flex gap-2">
          <span className="font-semibold text-[#b9b7b7]">
            Last known location:
          </span>
          <span className="font-bold text-white">{}</span>
        </div>
      </div>
    </main>
  );
};

export default CharacterScreen;
