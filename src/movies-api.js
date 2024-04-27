import axios from "axios";

const AUTH_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTNkYzE1MjQ2YWQ4MDkwM2ZkZTc0OTUzZmVmMzYxMyIsInN1YiI6IjY2MjdiODQ0MjU4ODIzMDEzMTkwNjc4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kpZatmpQc9xbOFJ4pzbNAygFEzzJvJAMITgqgw-aUlM";
axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

// const options = {
//   headers: {
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTNkYzE1MjQ2YWQ4MDkwM2ZkZTc0OTUzZmVmMzYxMyIsInN1YiI6IjY2MjdiODQ0MjU4ODIzMDEzMTkwNjc4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kpZatmpQc9xbOFJ4pzbNAygFEzzJvJAMITgqgw-aUlM",
//   },
// };

// export const getTrendingMovies = async () => {
//   const response = await axios.get(
//     "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
//     options
//   );
//   return response.data.results;
// };

export const getTrendingMovies = async () => {
      const response = await axios.get(`/trending/movie/week`)
      return response.data.results;
    }

// export const getMovieById = async (movieId) => {
//   const response = await axios.get(
//     `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
//     options
//   );
//   return response.data;
// };

export const getMovieById = async (movieId) => {
      const response = await axios.get(`/movie/${movieId}?language=en-US`);
      return response.data;
    };

// export const getMovieCast = async (movieId) => {
//   const response = await axios.get(
//     `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
//     options
//   );
//   return response.data.cast;
// };

export const getMovieCast = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits?language=en-US`);
  return response.data.cast;
};

// export const getMovieReviews = async (movieId) => {
//   const response = await axios.get(
//     `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
//     options
//   );
//   return response.data.results;
// };

export const getMovieReviews = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/reviews?language=en-US&page=1`);
  return response.data.results;
};

export const getMovies = async (searchQuery) => {
  const response = await axios.get(
    `/search/movie?include_adult=false&language=en-US&page=1/`,{
        params: {
           query: searchQuery,
        },
      }
  );
  return response.data.results;
};
