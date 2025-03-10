import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import RestContainer from "./RestContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {/*
        Main Container
          -Video bg
          -Video title
        
        Rest Container
          -MovieList * n,
          -Cards * n
      
      
      
      */}
      <MainContainer />
      <RestContainer />
    </div>
  );
};

export default Browse;
