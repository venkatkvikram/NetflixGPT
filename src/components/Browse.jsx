import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import RestContainer from "./RestContainer";

const Browse = () => {

  useNowPlayingMovies();

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
