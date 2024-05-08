import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

// const API_KEY = "ffddef6006fcbe2761316e9b6dd3380e";
const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmRkZWY2MDA2ZmNiZTI3NjEzMTZlOWI2ZGQzMzgwZSIsInN1YiI6IjY2M2JjMjJhMWRmODcwOTk3MWJmMzJlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qor7Pv-fMnIyj1ae7x-EEQ0E-8ATmgVVljSKUb_0Uf0";

// export const fetchImages = async (searchQuery, currentPage) => {
//   const response = await axios.get("/search/photos/", {
//     params: {
//       query: searchQuery,
//       page: currentPage,
//       client_id: ACCESS_KEY,
//       per_page: 9,
//       orientation: "landscape",
//     },
//   });

//   return response.data.results;
// };

const url =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

const options = {
  headers: {
    Authorization: API_TOKEN,
  },
};

axios
  .get(url, options)
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
