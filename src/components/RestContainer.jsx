import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const RestContainer = () => {
  const movieList = useSelector((store) => store.movies);

  return (
    movieList.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-72 pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movieList.nowPlayingMovies} />
          <MovieList title={"Popular Movies"} movies={movieList.popularMovies} />
          <MovieList title={"Top Rated"} movies={movieList.topRatedMovies} />
          <MovieList title={"Upcoming Movies"} movies={movieList.upComingMovies} />
          {/* {
        Movie list - popular
        Movie list - Now trending
        Movie list - Horror

      } */}
        </div>
      </div>
    )
  );
};

export default RestContainer;
