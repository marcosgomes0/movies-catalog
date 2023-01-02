import { BiStar } from "react-icons/bi";
import { Link } from "react-router-dom";

import Image from "./Image";

function MovieCards({ title, vote_average, poster_path, id }) {
  const movieURL = import.meta.env.VITE_IMG;

  return (
    <li className="p-1 pb-3 grid bg-neutral-800 rounded-md">
      <Link to={`/movie/${id}`} className="grid">
        <Image src={`${movieURL}${poster_path}`} title={title} />
        <h2 className="mt-2 mb-1 text-md font-bold text-lg pl-3">{title}</h2>
        <div className="flex items-center gap-2 pl-3 self-end">
          <BiStar className="text-yellow-400" />
          <span>{vote_average}</span>
        </div>
      </Link>
    </li>
  );
}

export default MovieCards;
