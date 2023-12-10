import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import CharacterScreen from "./pages/CharacterScreen";
import { fetchData } from "./helpers/fetchData";

function App() {
  const [db, setDb] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function fetching() {
      const data = await fetchData("https://rickandmortyapi.com/api/character");
      setDb(data);
      setLoading(false);
    }

    fetching();

    return () => {};
  }, []);

  console.log(db);
  console.log(loading);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomeScreen
              setDb={setDb}
              db={db}
              loading={loading}
              setLoading={setLoading}
              error={error}
              setError={setError}
            />
          }
        />
        <Route
          path="/character/:id"
          element={
            <CharacterScreen loading={loading} setLoading={setLoading} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
