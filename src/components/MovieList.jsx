import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(" ", movies);
  if (!movies) return;
  return (
    <div className="px-6 ">
      <h1 className="py-4  text-lg md:text-4xl text-white ">{title}</h1>
      <div className="flex overflow-x-scroll" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <div className="flex">
          {movies.map((movie, index) => (
            <MovieCard key={index} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
