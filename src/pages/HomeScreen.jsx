import FormSearch from "../components/FormSearch";
import ListCharacters from "../components/ListCharacters";

const HomeScreen = ({ setDb, results }) => {
  return (
    <>
      <h1 className="text-[#4F4F65] text-3xl text-center py-8 font-black">
        Rick App Morty
      </h1>

      <FormSearch setDb={setDb} />

      <ListCharacters results={results} />
    </>
  );
};

export default HomeScreen;
