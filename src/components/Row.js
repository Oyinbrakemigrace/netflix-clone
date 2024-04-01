import axios from "./axios";
import React, { useEffect, useState } from "react";

function Row({ genre, fetchUrl, isLargeRow = false }){
  const [movies, setMovies] = useState([]);

  const baseURL = "https://image.tmdb.org/t/p/original";

 useEffect(()=>{
  async function fetchMovies(){
    const request = await axios.get(fetchUrl)
    setMovies(request.data.results)
    return request
  }
  fetchMovies()
 }, [fetchUrl])


  return (
    <div className="bg-[#111]">
      <div className=" text-white ml-5">
        <h2 className="text-xl font-semibold">{genre}</h2>
        <div className="flex flex-row overflow-x-scroll overflow-y-hidden scroll-container p-3">
          {movies?.map((movie) => (
            <img
              className={`max-h-24 object-contain mr-4 transform hover:scale-110 transition-transform duration-500 ${
                isLargeRow && "max-h-[200px]"
              }`}
              key={movie.id}
              src={`${baseURL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}



export default Row;