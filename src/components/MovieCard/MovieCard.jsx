import { useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function MovieCard({
  movie: {
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
    poster_path,
  },
}) {
  const location = useLocation();
  const backLinkURL = useRef(location.state ?? "/movies")

  const getGenres = (items) => {
    return items.map((item) => item.name).join(" ");
  };
  const path = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <>
      <div>
        <NavLink to={backLinkURL.current}>Go back</NavLink>
      </div>
      <img src={path} alt={original_title} />
      <h2>
        {original_title} ({release_date})
      </h2>
      <p>User score: {vote_average}</p>
      <h3>Overwiew</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{getGenres(genres)}</p>
      <h4>Additional information</h4>
    </>
  );
}
