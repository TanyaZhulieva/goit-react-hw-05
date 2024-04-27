import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieCast } from "/src/movies-api.js";
import ActorCard from "../ActorCard/ActorCard";

export default function MovieCast() {
  const { movieId } = useParams();

  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovieCast() {
      try {
        setIsLoading(true);
        const data = await getMovieCast(movieId);
        setCast(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovieCast();
  }, [movieId]);
  console.log(cast);
  return (
    <div>
      {error && <p>Error!!!</p>}
      {isLoading && <p>Loading...</p>}
      {cast && (
        <ul>
          {cast.map((actor) => (
            <li key={actor.id}>
              <ActorCard actor={actor} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
