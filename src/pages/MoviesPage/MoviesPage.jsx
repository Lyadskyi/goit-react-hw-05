import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchMovie } from "../../requests-api";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import SearchMovie from "../../components/SearchMovie/SearchMovie";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";

export default function MoviesPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [findMovie, setFindMovie] = useState([]);

  useEffect(() => {
    if (!searchParams.get("query")) {
      return;
    }
    async function fetchMovies() {
      const notify = () =>
        toast.error("Sorry, we can not find your film", {
          duration: 3000,
          position: "top-right",
          style: {
            backgroundColor: "#2e2a01",
            color: "#f3b399",
          },
        });
      try {
        setLoading(true);
        const searchMovie = await getSearchMovie(searchParams.get("query"));
        if (searchMovie.data.results.length === 0) {
          notify();
        }
        setFindMovie(searchMovie.data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, [searchParams]);

  const handleSubmit = (input) => {
    setSearchParams({ query: input });
  };

  return (
    <div>
      <Toaster />
      <SearchMovie onSubmit={handleSubmit} />
      {findMovie.length > 0 && <MovieList movies={findMovie} />}
      {loading && <Loader />}
      {error && <p>Sorry! Please, reload the page...</p>}
    </div>
  );
}
