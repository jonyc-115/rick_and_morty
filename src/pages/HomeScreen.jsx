import FormSearch from "../components/FormSearch";
import ListCharacters from "../components/ListCharacters";
import PagButtons from "../components/PagButtons";

const HomeScreen = ({ setDb, db }) => {
  console.log(db);

  return (
    <>
      <h1 className="text-[#4F4F65] text-3xl text-center py-8 font-black">
        Rick App Morty
      </h1>

      <FormSearch setDb={setDb} />

      <PagButtons setDb={setDb} db={db} />
      <ListCharacters db={db} />
    </>
  );
};

export default HomeScreen;
