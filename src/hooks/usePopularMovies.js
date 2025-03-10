import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addNowPlayingMovies, addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    try {
      const response = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", API_OPTIONS);
      const data = await response.json();
      console.log("data", data.results);
      dispatch(addPopularMovies(data.results));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
