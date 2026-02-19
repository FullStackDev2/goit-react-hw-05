import {
  useParams,
  NavLink,
  Outlet,
  useLocation,
  Link,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../service-api/tmdb-api";
import { FiArrowLeft } from "react-icons/fi";
import "./MovieDetailsPage.css";

const IMAGE_BASE = "https://image.tmdb.org/t/p/w300";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = location.state?.from ?? "/movies";
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  return (
  <div>
    <Link to={backLink} className="backLink">
  <FiArrowLeft /> Go back
</Link>

    <div className="movieContainer">
      <img
        className="moviePoster"
        src={
          movie.poster_path
            ? `${IMAGE_BASE}${movie.poster_path}`
            : "https://via.placeholder.com/300x450"
        }
        alt={movie.title}
      />

      <div className="movieInfo">
        <h2>{movie.title}</h2>

        <p>
          <strong>User Score:</strong>{" "}
          {Math.round(movie.vote_average * 10)}%
        </p>

        <h3>Overview :</h3>
        <p>{movie.overview}</p>

        <h3>Genres :</h3>
        <p>
          {movie.genres.map(genre => genre.name).join(", ")}
        </p>
      </div>
    </div>

    <hr />

    <h3>Additional Information</h3>
    <ul>
      <li>
        <NavLink to="cast">Cast</NavLink>
      </li>
      <li>
        <NavLink to="reviews">Reviews</NavLink>
      </li>
    </ul>

    <Outlet />
  </div>
);
}