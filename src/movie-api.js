import axios from "axios";

// const API_KEY = "ffddef6006fcbe2761316e9b6dd3380e";
const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmRkZWY2MDA2ZmNiZTI3NjEzMTZlOWI2ZGQzMzgwZSIsInN1YiI6IjY2M2JjMjJhMWRmODcwOTk3MWJmMzJlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qor7Pv-fMnIyj1ae7x-EEQ0E-8ATmgVVljSKUb_0Uf0";

const url = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
};

export const fetchMovies = async () => {
  const response = await axios.get(url, options);
  console.log(response);
  return response.data.results;
};

export const getMovieById = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}`, options);
  console.log(response);
  return response.data;
};

// axios
//   .get(url, options)
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
