import MovieCast from "../MovieCast/MovieCast";
import css from "./MovieList.module.css";

export default function MovieList({ movies }) {
  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieCast movie={movie} />
        </li>
      ))}
    </ul>
  );
}
