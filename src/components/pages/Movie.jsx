import React from "react";
import { useParams } from "react-router-dom";
import { BiStar } from "react-icons/bi";
import Image from "../static/Image";

function Movie() {
  const [movie, setMovie] = React.useState(null);
  const movieURL = import.meta.env.VITE_API;
  const key = import.meta.env.VITE_API_KEY;
  const imageURL = import.meta.env.VITE_IMG;

  const { id } = useParams();

  React.useEffect(() => {
    async function getMovie() {
      const response = await fetch(`${movieURL}${id}?${key}`);
      const json = await response.json();
      if (json) {
        setMovie(json);
        document.title = json.title;
      }
    }
    getMovie();
  }, [id]);

  return (
    <section className="bg-neutral-900">
      <div className="container mx-auto grid justify-items-center max-w-4xl p-8 md:py-28">
        {movie && (
          <div className="text-white grid md:grid-cols-2 md:gap-8 gap-4 bg-neutral-800 p-4 rounded-md">
            <Image
              src={`${imageURL}${movie.poster_path}`}
              title={movie.id}
              remove={false}
            />
            <div className="pb-4">
              <div className="flex justify-between p-3 mb-5">
                <h2 className="text-2xl font-bold">{movie.title}</h2>
                <div className="flex items-center gap-2 self-end">
                  <BiStar className="text-yellow-400" />
                  <span>{movie.vote_average.toFixed(1)}</span>
                </div>
              </div>
              <p>{movie.overview}</p>
              <div className="grid gap-4 mt-8">
                <div>
                  <span className="font-semibold text-lg">Genero:</span>
                  <ul className="flex gap-4 mt-2">
                    {movie.genres.map((genre) => (
                      <li
                        className="bg-neutral-600 p-2 rounded-lg text-white"
                        key={genre.id}
                      >
                        {genre.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <p>
                  <span className="font-semibold">Lançamento:</span>{" "}
                  {movie.release_date}
                </p>
                <p>
                  <span className="font-semibold">Duração:</span>{" "}
                  {`${Math.floor(Number(movie.runtime / 60))}h  ${
                    Number(movie.runtime) % 60
                  }m`}
                </p>
                <p>
                  <span className="font-semibold">Orcamento: </span>
                  {movie.budget} USD
                </p>
                <p>
                  <span className="font-semibold">Arrecadação: </span>
                  {movie.revenue} USD
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Movie;
