import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import CharacterScreen from "./pages/CharacterScreen";

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
      <Routes>
        <Route
          path="/"
          element={<HomeScreen setDb={setDb} results={results} />}
        />
        <Route path="/character/:id" element={<CharacterScreen />} />
      </Routes>
    </>
  );
}

export default App;
