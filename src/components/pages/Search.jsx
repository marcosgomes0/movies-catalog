import { useLocation, useParams } from "react-router-dom";
import React from "react";
import { useState } from "react";
import MovieCards from "../static/MovieCards";

function Search() {
  const location = useLocation();
  const searchURL = import.meta.env.VITE_SEARCH;
  const key = import.meta.env.VITE_API_KEY;

  const [searchList, setSearchList] = useState([]);

  const { pathname } = location;
  const { search } = useParams();

  const searchClean = pathname.replace("/search/", "");

  document.title = search;

  React.useEffect(() => {
    async function getMovies() {
      const response = await fetch(`${searchURL}?${key}&query=${searchClean}`);
      const json = await response.json();
      if (json) {
        setSearchList(
          json.results.filter((exist) => {
            return exist.poster_path !== null;
          })
        );
      }
    }
    getMovies();
  }, [search]);

  return (
    <section className="bg-neutral-900 py-8">
      <h2 className="container mx-auto text-center text-2xl sm:text-4xl mb-12 text-white font-bold">
        Resultados para:{" "}
        <span className="text-yellow-400">{search && search}</span>
      </h2>
      <div className="container mx-auto">
        <ul className="grid px-5 justify-items-center sm:grid-cols-2 md:grid-cols-3 gap-8 text-white">
          {searchList &&
            searchList.map((list) => <MovieCards key={list.id} {...list} />)}
        </ul>
      </div>
    </section>
  );
}

export default Search;
