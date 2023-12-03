import { useEffect, useState } from "react";
import "./App.css";
import FormSearch from "./components/FormSearch";
import ListCharacters from "./components/ListCharacters";

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
  console.log(results);

  return (
    <>
      <h1 className="text-[#4F4F65] text-3xl text-center py-8 font-black">
        Rick App Morty
      </h1>

      <FormSearch />

      <ListCharacters />
    </>
  );
}

export default App;
