import axios from 'axios'

const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

const options = {
 headers: {
 Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTNkYzE1MjQ2YWQ4MDkwM2ZkZTc0OTUzZmVmMzYxMyIsInN1YiI6IjY2MjdiODQ0MjU4ODIzMDEzMTkwNjc4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kpZatmpQc9xbOFJ4pzbNAygFEzzJvJAMITgqgw-aUlM'
 }
};

export const getTrendingMovies = async ()=>{
    const response = await axios.get(url, options)
    return response.data.results
}



export const getMovieById  = async(movieId)=> {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
    return response.data
}
