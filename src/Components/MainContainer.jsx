import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) {
    return;
  }
  const mainMovie = movies[0];
  console.log(mainMovie);
  const { titleText, genres } = mainMovie.entries[0];
  //console.log(titleText + genres);

  return (
    <div>
      <VideoTitle title={titleText} type={genres} />
      <VideoBackground />
    </div>
  );
};

export default MainContainer;
