import { Link, useLocation } from "react-router-dom";

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link
            to={`/movies/${movie.id}`}
            state={{ from: location }}
          >
            <img
              src={
                movie.poster_path
                  ? `${IMAGE_BASE}${movie.poster_path}`
                  : "https://via.placeholder.com/150x225"
              }
              alt={movie.title}
              width="100"
            />
            <p>{movie.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
