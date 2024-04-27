import { useState, useEffect } from "react";
import { getMovies } from "/src/movies-api.js";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from '../../components/MovieList/MovieList'



export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setMovies([]);
  };

  useEffect(() => {
    if (query === "") {
        return;
      }

    async function fetchMovies() {
      try {
        setIsLoading(true);
        const data = await getMovies(query);
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();
  }, [query]);

  console.log(movies);

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {movies.length > 0 && <MovieList movies={movies}/>}

    </div>
  );
}
