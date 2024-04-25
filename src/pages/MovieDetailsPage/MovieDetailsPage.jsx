import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieById } from "/src/movies-api.js";

export default function MovieDetailsPage() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovie() {
      try {
        setIsLoading(true);
        const data = await getMovieById(movieId);
        setMovie(data)
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovie();
  }, [movieId]);

  console.log(movie);

  return (
    <div>
      <h2>movie details</h2>
    </div>
  );
}
