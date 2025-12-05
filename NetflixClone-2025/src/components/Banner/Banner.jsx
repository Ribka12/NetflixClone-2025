import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Banner.css";
import requests, { baseUrlImg } from "../../utils/request";
import api from "../../utils/axios";

function Banner() {
  const [movie, setMovie] = useState({});
  // movie.title, movie.overview, movie.backdrop_path, movie.id
  useEffect(() => {
    (async () => {
      try {
        const res = await api.get(requests.fetchNetflixOriginals);
        setMovie(
          res.data.results[
            Math.floor(Math.random() * res.data.results.length - 1)
          ]
        );
      } catch (err) {
        console.log("Error while fetching banner data", err);
      }
    })();
  }, []);

  return (
    <>
      <div
        className="hero-banner"
        style={{
          background: `url(${baseUrlImg}${movie?.backdrop_path}) center/cover no-repeat`,
        }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1 className="hero-title">{movie.title}</h1>

          <div className="hero-buttons">
            <button className="btn btn-play">Play</button>
            <button className="btn btn-list">My List</button>
          </div>

          <p className="hero-description">
            {movie?.overview?.length > 150
              ? movie?.overview.slice(0, 150) + "..."
              : movie?.overview}
          </p>
        </div>
      </div>
    </>
  );
  
}

export default Banner;
