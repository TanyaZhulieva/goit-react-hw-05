import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieReviews } from "/src/movies-api.js";
import ReviewCard from '../ReviewCard/ReviewCard'

export default function MovieReviews() {
  const { movieId } = useParams();

  const [reviews, setRewiews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovieReviews() {
      try {
        setIsLoading(true);
        const data = await getMovieReviews(movieId);
        setRewiews(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovieReviews();
  }, [movieId]);
  console.log(reviews);

  return (
    <>
      {error && <p>Error!!!</p>}
      {isLoading && <p>Loading...</p>}
      {reviews && <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <ReviewCard review={review} />
            </li>
          ))}
        </ul>}
      
    </>
  );
}
