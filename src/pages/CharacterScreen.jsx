import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CharDates from "../components/CharDates";
import ListCharacters from "../components/ListCharacters";
import { fetchData } from "../helpers/fetchData";

const CharacterScreen = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  console.log(character);

  useEffect(() => {
    const fetching = async () => {
      const data = await fetchData(
        `https://rickandmortyapi.com/api/character/${id}`
      );

      setCharacter(data);
    };

    fetching();
  }, []);

  const { name, image } = character;

  return (
    <main className=" min-h-screen bg-[#43415f]">
      <Link
        className="absolute top-2 left-2 bg-[#43415f99] p-1 rounded-lg font-semibold text-[#efefef]"
        to="/"
      >
        Go back
      </Link>
      <section>
        <div>
          <img src={image} alt={name} />
        </div>
        <div className="relative px-6 mt-[-1rem] bg-[#43415F]  rounded-t-2xl flex flex-col gap-2">
          <h3 className="text-center py-6 font-black text-3xl text-white">
            {name}
          </h3>

          <CharDates character={character} />
        </div>
      </section>
      <section>
        <ListCharacters />
      </section>
    </main>
  );
};

export default CharacterScreen;
