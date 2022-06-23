import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

function Row({ title, fetchURL, isLargeRow = false }) {
  //baseUrl for movie posters
  const base_Url = "https://image.tmdb.org/t/p/original/";
  //declaration of movie variable
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Make an async call function to fetchData
    async function fetchData() {
      //Request for movie by appending axios to get the movie data
      const request = await axios.get(fetchURL);
      //Set
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  // console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map((movie) => (
          <img
            //apply row_posterLarge isLargeRow
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            //if the img isLargeRow show poster_path else backdrop_path
            src={`${base_Url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
