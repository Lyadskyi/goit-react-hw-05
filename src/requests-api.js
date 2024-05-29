import axios from "axios";

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmRkZWY2MDA2ZmNiZTI3NjEzMTZlOWI2ZGQzMzgwZSIsInN1YiI6IjY2M2JjMjJhMWRmODcwOTk3MWJmMzJlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qor7Pv-fMnIyj1ae7x-EEQ0E-8ATmgVVljSKUb_0Uf0";

const options = {
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
};

export async function getTrendingMovies() {
  const url = "https://api.themoviedb.org/3/trending/movie/day";
  const params = {
    language: "en-US",
  };
  return await axios.get(url, { params, ...options });
}

export async function getSearchMovie(query) {
  const url = `https://api.themoviedb.org/3/search/movie`;
  const params = {
    query: query,
    include_adult: false,
    language: "en-US",
    page: 1,
  };
  return await axios.get(url, { params, ...options });
}

export async function getMovieDetails(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}`;
  const params = {
    language: "en-US",
  };
  return await axios.get(url, { params, ...options });
}

export async function getMovieCredits(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits`;
  const params = {
    language: "en-US",
  };
  return await axios.get(url, { params, ...options });
}

export async function getMovieReviews(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}/reviews`;
  const params = {
    language: "en-US",
    page: 1,
  };
  return await axios.get(url, { params, ...options });
}
