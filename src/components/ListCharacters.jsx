import CardChar from "./CardChar";
import Loader from "./Loader";

const ListCharacters = ({ db, loading }) => {
  const results = db ? db.results : [];

  console.log(results);

  return (
    <ul className="grid px-4 pt-4 grid-cols-fluid gap-7 justify-items-center  max-w-[1180px] m-auto">
      {loading ? (
        <Loader />
      ) : (
        results?.map((el) => {
          return <CardChar key={el.id} character={el} />;
        })
      )}
    </ul>
  );
};

export default ListCharacters;
