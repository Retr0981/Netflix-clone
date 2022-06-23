import React, { useState, useEffect } from "react";
import axios from "./axios";
import Requests from "./Request";
import "./Banner.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "./firebase";
function Banner() {
  const User = useSelector(selectUser);
  //Initialize movie variable and set it to an empty array
  const [movie, setmovie] = useState([]);

  //Fetch movie information using useEffect
  useEffect(() => {
    //async call to fetchData
    // fetchData is responsible for fetching the movie information
    async function fetchData() {
      /*Create a variable for to fetch movie information by appending axios to the Requests */
      const request = await axios.get(Requests.fetchNetflixOriginals);
      //Set the movie to the requested variable
      setmovie(
        request.data.results[
          // Generate a random number to fetch different movies information each time
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    }

    fetchData();
  }, []);

  // console.log(movie);

  const [show, setshow] = useState(false);
  /* A function to be triggered only when the user scrolls */
  function transition() {
    if (window.scrollY > 100) {
      setshow(true);
    } else {
      setshow(false);
    }
  }

  //Elipses function to truncate the description if it exceeds 150
  function truncate(string, n) {
    // when the string is undefined use "?"
    return string?.length > n ? string.substring(0, n - 1) + ". . ." : string;
  }

  useEffect(() => {
    //Everytime the user scrolls listen to this event
    window.addEventListener("scroll", transition);
    return () => {
      window.removeEventListener("scroll", transition);
    };
  }, []);

  return (
    // The beginning point for the reuest to the url of the image ""https://image.tmdb.org/t/p/original/""
    <div
      className="Banner-container"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className={`navBar ${show && "nav_black"}`}>
        <div className="logo">
          <img src="./assets/logo.png" alt="" srcset="" />
        </div>

        <div className="avarta">
          <img
            onClick={() => auth.signOut()}
            src={User.photo}
            alt=""
            srcset=""
          />
        </div>
      </div>

      <div className="Banner_contents">
        <div className="Banner_title">
          <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        </div>

        <div className="Banner_buttons">
          <button className="Banner_button">Play</button>
          <button className="Banner_button">My List</button>
        </div>

        <div className="Banner_description">
          <p>{truncate(movie?.overview, 180)} </p>
        </div>
      </div>
      <div className="Banner-fadeBottom"></div>
    </div>
  );
}

export default Banner;
