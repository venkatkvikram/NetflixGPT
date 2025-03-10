import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const fetchMovieVideos = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
      const data = await response.json();
      console.log("fetchedVideos", data.results);
      const filteredData = data.results.filter((video) => video.type === "Trailer");
      const trailer = filteredData.length == 0 ? filteredData[0] : data.results[0];
      console.log("trailer", trailer);
      dispatch(addTrailerVideo(trailer))
    };
  
    useEffect(() => {
      fetchMovieVideos();
    }, []);
}

export default useMovieTrailer;