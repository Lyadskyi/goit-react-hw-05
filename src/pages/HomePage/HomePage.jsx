import { useState, useEffect } from "react";
import { getTrendingMovies } from "../../requests-api";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";

export default function HomePage() {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function trendingMoviesList() {
      try {
        setLoading(true);
        const trendingMovies = await getTrendingMovies();
        setMovieList(trendingMovies.data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    trendingMoviesList();
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      <MovieList movies={movieList} />
      {loading && <Loader />}
      {error && "Sorry! Please, reload the page..."}
    </div>
  );
}
