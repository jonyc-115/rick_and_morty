import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import CharacterScreen from "./pages/CharacterScreen";
import { fetchData } from "./helpers/fetchData";

function App() {
  const [db, setDb] = useState([]);

  useEffect(() => {
    async function fetching() {
      const data = await fetchData("https://rickandmortyapi.com/api/character");
      setDb(data);
    }

    fetching();

    return () => {};
  }, []);

  console.log(db);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen setDb={setDb} db={db} />} />
        <Route path="/character/:id" element={<CharacterScreen />} />
      </Routes>
    </>
  );
}

export default App;
