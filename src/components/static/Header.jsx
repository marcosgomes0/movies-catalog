import { Link } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt } from "react-icons/bi";
import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [search, setSearch] = React.useState(null);

  const navigate = useNavigate();

  function handleSubmit() {
    navigate(`search/${search}`);
  }

  return (
    <header className="bg-neutral-900		">
      <div className="container mx-auto px-5 flex flex-col sm:flex-row sm:justify-between items-center">
        <Link to="/" className="flex gap-2 items-center text-yellow-400">
          <span className="text-3xl">
            <BiCameraMovie />{" "}
          </span>
          <h2 className="text-3xl py-5 font-bold"> Movie/Catalog</h2>
        </Link>
        <form className="flex gap-2" onSubmit={handleSubmit}>
          <input
            className="p-2 rounded-md focus:outline-yellow-400 "
            type="text"
            name="search"
            id="search"
            placeholder="Busque um filme..."
            onChange={({ target }) => setSearch(target.value)}
          />
          <button className="bg-yellow-400	 text-black p-3 rounded-md hover:opacity-90">
            <BiSearchAlt />
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;
