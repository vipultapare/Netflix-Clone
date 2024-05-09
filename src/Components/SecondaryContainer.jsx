import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  console.log("m are: " + movies);
  return (
    <div className=" bg-black">
      <div className="-mt-10 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlaying} />
        <MovieList title={"Now Playing"} movies={movies.nowPlaying} />
        <MovieList title={"Now Playing"} movies={movies.nowPlaying} />
        <MovieList title={"Now Playing"} movies={movies.nowPlaying} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
