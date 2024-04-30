import React, { useEffect } from "react";
import Header from "./Header";
import { options } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utils/moviesSlice";

const Browse = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const url = "https://imdb8.p.rapidapi.com/auto-complete?q=k";
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result.d);
      dispatch(addNowPlayingMovies(result.d));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
