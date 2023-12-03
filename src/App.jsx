import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [db, setDb] = useState([]);

  useEffect(() => {
    async function fetching() {
      const res = await fetch("https://rickandmortyapi.com/api/character");

      if (!res.ok) return console.log("hubo un un error");

      const json = await res.json();

      setDb(json);
    }

    fetching();

    return () => {};
  }, []);

  console.log(db);

  const info = db.info;
  const results = db.results;
  console.log(info);

  return (
    <>
      <h1 className="text-[#4F4F65] text-3xl text-center py-8 font-black">
        Rick App Morty
      </h1>

      <form className="flex max-w-xs flex-col m-auto gap-4 px-4">
        <input
          className="p-2 rounded-xl bg-[#EDEDF5] border-[1px] border-[#B4C5B5] outline-none"
          type="text"
          placeholder="Rick, Morty, Beth..."
        />
        <input
          className="bg-[#1B2899] w-[5rem] text-white rounded-lg py-1 font-semibold"
          type="submit"
          value="Go"
        />
      </form>

      <ul className="grid px-4 py-6 grid-cols-fluid gap-7 justify-items-center">
        {results?.map((el) => (
          <li className="text-center min-h-[15rem]" key={el.id}>
            <h3 className="mb-2 min-h-[3rem] flex justify-center items-center">
              {el.name} - {el.species}
            </h3>
            <div>
              <img src={el.image} alt="" />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
