import { options } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () =>{
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
  const url = 'https://imdb188.p.rapidapi.com/api/v1/getUpcomingMovies?region=US';
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result.message);
      dispatch(addNowPlayingMovies(result.message));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
}


export default useNowPlayingMovies;