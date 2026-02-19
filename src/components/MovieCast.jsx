import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieCast } from "../service-api/tmdb-api";
import "./MovieCast.css";

const IMAGE_BASE = "https://image.tmdb.org/t/p/w92";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId).then(setCast);
  }, [movieId]);

  if (!cast.length) return <p>No Cast Information Available...</p>;

  return (
    <ul className="castList">
  {cast.map(actor => (
    <li key={actor.id} className="castItem">
      <img
  src={`${IMAGE_BASE}${actor.profile_path}`}
  alt={actor.name}
  className="castImage"
  onError={(e) => {
    e.target.src = "https://via.placeholder.com/80x120?text=No+Photo";
  }}
/>
      <p className="castName">{actor.name}</p>
      <p className="castCharacter">{actor.character}</p>
    </li>
  ))}
</ul>
  );
}
