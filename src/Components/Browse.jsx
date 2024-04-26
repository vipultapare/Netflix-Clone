import React, { useEffect } from "react";
import Header from "./Header";
import { options } from "../Utils/constant";

const Browse = () => {
  const getNowPlayingMovies = async () => {
    const url = "https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr";
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
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
