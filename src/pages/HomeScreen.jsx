import FormSearch from "../components/FormSearch";
import ListCharacters from "../components/ListCharacters";
import Loader from "../components/Loader";
import PagButtons from "../components/PagButtons";

const HomeScreen = ({ setDb, db, loading, setLoading, setError, error }) => {
  return (
    <>
      <h1 className="text-[#4F4F65] text-3xl text-center py-8 font-black">
        Rick App Morty
      </h1>

      <FormSearch setDb={setDb} setLoading={setLoading} setError={setError} />

      {loading ? (
        <Loader />
      ) : error ? (
        <div className="text-[#ff4343] font-bold text-center">
          Character not found: {error}
        </div>
      ) : (
        <>
          <PagButtons setDb={setDb} db={db} />
          <ListCharacters db={db} error={error} />
          <div className="pb-8">
            <PagButtons setDb={setDb} db={db} />
          </div>
        </>
      )}
    </>
  );
};

export default HomeScreen;
