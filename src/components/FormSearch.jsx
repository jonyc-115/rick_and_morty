import { useState } from "react";

const FormSearch = ({ setDb }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://rickandmortyapi.com/api/character/?name=${search}`)
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((json) => {
        setDb(json);
        setSearch("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-xs flex-col m-auto gap-4 px-4"
    >
      <input
        onChange={handleChange}
        className="p-2 rounded-xl bg-[#EDEDF5] border-[1px] border-[#B4C5B5] outline-none"
        type="text"
        placeholder="Rick, Morty, Beth..."
        value={search}
      />
      <input
        className="bg-[#1B2899] w-[5rem] text-white rounded-lg py-1 font-semibold cursor-pointer"
        type="submit"
        value="Go"
      />
    </form>
  );
};

export default FormSearch;
