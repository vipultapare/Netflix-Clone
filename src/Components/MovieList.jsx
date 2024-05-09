import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log("Movies are: " + movies);
  return movies &&  (
    <div className="pt-6 text-white">
      <h1 className="text-3xl font-bold py-6">{title}</h1> 
      <div className="flex overflow-x-scroll">
        
        <div className="flex"> 
          {movies.map((movies)=>(
             <MovieCard key={movies.id} posterPath = {movies.poster_path} />
          ))}
         
        </div>
      </div>
    </div>
  )