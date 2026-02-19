import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../service-api/tmdb-api";
import styles from "./MoviesPage.module.css";
import MovieList from "../components/MovieList";

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!query) return;
    searchMovies(query).then(setMovies);
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.search.value;
    setSearchParams({ query: value });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input
          name="search"
          defaultValue={query}
          className={styles.searchInput}
          placeholder="Search movies..."
        />
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>

      {movies.length > 0 && <MovieList movies={movies} />}

      {query && movies.length === 0 && (
    <p className={styles.noResult}>No results found. Please try another search...</p>
  )}
    </div>
  );
}
