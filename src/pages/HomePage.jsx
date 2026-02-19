import { useEffect, useState } from "react";
import { fetchTrending } from "../service-api/tmdb-api";
import MovieList from "../components/MovieList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrending().then(setMovies);
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
