import React from "react";

import MovieCards from "../static/MovieCards";

function Home() {
  const moviesURL = import.meta.env.VITE_API;
  const key = import.meta.env.VITE_API_KEY;

  const [movies, setMovies] = React.useState([]);

  document.title = "Home";

  React.useEffect(() => {
    async function getMovies() {
      const response = await fetch(`${moviesURL}top_rated?${key}`);
      const json = await response.json();
      if (json) {
        setMovies(
          json.results.filter((exist) => {
            return exist.poster_path !== null;
          })
        );
      }
    }
    getMovies();
  }, []);

  return (
    <section className="bg-neutral-900 py-8">
      <div className="container mx-auto">
        <ul className="grid px-5 justify-items-center sm:grid-cols-2 md:grid-cols-3 gap-8 text-white">
          {movies &&
            movies.map((movie) => <MovieCards key={movie.id} {...movie} />)}
        </ul>
      </div>
    </section>
  );
}

export default Home;
