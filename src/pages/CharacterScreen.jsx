import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CharDates from "../components/CharDates";
import { fetchData } from "../helpers/fetchData";
import Loader from "../components/Loader";

const CharacterScreen = ({ loading, setLoading }) => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  console.log(character);

  useEffect(() => {
    const fetching = async () => {
      setLoading(true);
      const data = await fetchData(
        `https://rickandmortyapi.com/api/character/${id}`
      );

      setCharacter(data);
      setLoading(false);
    };

    fetching();
  }, []);

  const { name, image } = character;

  return (
    <main className="bg-[#43415f]">
      <div className="relative max-w-[1024px] m-auto  items-center justify-center ">
        <Link
          className="absolute top-2 left-2 bg-[#43415f99] p-1 rounded-lg font-semibold text-[#efefef] tablet:top-[15%] tablet:left-[7rem] tablet:bg-[#ffffff24] shadow-md  hover:bg-[#ffffff72]"
          to="/"
        >
          Go back
        </Link>
        <section className="tablet:flex min-h-screen items-center justify-center">
          <div className="tablet:rounded-md overflow-hidden">
            {loading ? (
              <Loader textColor={"text-white"} />
            ) : (
              <img src={image} alt={name} />
            )}
          </div>
          <div className="relative px-6 mt-[-1rem] bg-[#43415F]  rounded-t-2xl flex flex-col gap-2 min-h-[20rem]">
            <h3 className="text-center py-6 font-black text-3xl text-white">
              {name}
            </h3>

            <CharDates character={character} />
          </div>
        </section>
      </div>
    </main>
  );
};

export default CharacterScreen;
