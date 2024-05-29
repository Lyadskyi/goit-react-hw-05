import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../requests-api";
import Loader from "../Loader/Loader";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const [error, setError] = useState(false);
  const [cast, setCast] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCredits() {
      try {
        setLoading(true);
        const movieCast = await getMovieCredits(movieId);
        setCast(movieCast.data.cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getCredits();
  }, [movieId]);

  return (
    <div>
      {cast && (
        <ul className={css.castList}>
          {cast.map((actor) => (
            <li key={actor.cast_id}>
              <p>{actor.name}</p>
              <p>{actor.character}</p>
              <img
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt="actor photo"
              />
            </li>
          ))}
        </ul>
      )}
      {loading && <Loader />}
      {error && <p>Sorry! Please reload the page...</p>}
    </div>
  );
}
