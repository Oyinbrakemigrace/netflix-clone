import requests from "./Request";
import axios from "./axios";
import React, { useEffect, useState } from "react";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetcMovie() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() *request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetcMovie();
  }, []);
  console.log(movie);

  const descriptionEllipsis = (string, n) => {
    return string?.length > 100 ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <div className="bg-[#111] h-[100%]">
      <header
        className="h-[450px]  w-full relative text-white object-contain"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat : 'no-repeat',
          padding:"50px"
        }}
      >
        <div className="ml-[30px] pt-[140px]">
          <h1 className="lg:text-[48px] text-[30px] font-extrabold pb-3">
            {movie?.name || movie?.title || movie?.original_name}
          </h1>
          <div className="lg:mt-0 mt-5">
            <button className="cursor-pointer text-white outline-none border-none font-bold rounded-sm pl-8 pr-8 mr-4 pt-2 pb-2 bg-btn-bg hover:bg-[#e6e6e6] hover:text-black hover:transition-all duration-300">
              Play
            </button>
            <button className="cursor-pointer text-white outline-none border-none font-bold rounded-sm pl-8 pr-8 mr-4 pt-2 pb-2 bg-btn-bg hover:bg-[#e6e6e6] hover:text-black hover:transition-all duration-300">
              My List
            </button>
          </div>
          <h1 className="w-[720px] pt-[16px] text-[15px] max-w-[360px] h-[80px]">
            {descriptionEllipsis(`${movie?.overview}`, 200)}
          </h1>
        </div>
        <div />
      </header>
    </div>
  );
}

export default Banner;

//The substring of a string is a portion of the original string that starts at
//a specified index and includes a specified number of characters.

//string?.length checks if the string parameter is not null or
//undefined and then accesses its length property.
