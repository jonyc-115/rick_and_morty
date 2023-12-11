import HomeBtn from "./HomeBtn";

const Error = ({ error, setDb, setError, setLoading }) => {
  return (
    <div className="flex-1 flex justify-center items-center flex-col gap-4">
      <p className="text-[red] font-bold text-xl">
        Character not found: {error}
      </p>
      <HomeBtn setDb={setDb} setError={setError} setLoading={setLoading} />
    </div>
  );
};

export default Error;
