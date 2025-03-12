import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upComingMovies = useSelector(store => store.movies.upComingMovies)
  const getUpcomingMovies = async () => {
    try {
      const response = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", API_OPTIONS);
      const data = await response.json();
      console.log("data", data.results);
      dispatch(addUpcomingMovies(data.results));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
   !upComingMovies && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
