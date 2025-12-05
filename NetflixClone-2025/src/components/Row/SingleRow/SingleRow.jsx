import React, { useEffect, useState } from "react";
import "./Singlerow.css";
import api from "../../../utils/axios.js";
import requests, { baseUrlImg } from "../../../utils/request.js";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";


function SingleRow({ title, fetchUrl, isLarge }) {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get(fetchUrl);
        setMovie(res.data.results);
      } catch (err) {
        console.log("Error while fetching banner data", err);
      }
    })();
  }, []);


  function trailerFunction(movie) {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie.name || movie.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log("Error while fetching trailer", err));
    }
  }


  return (
    <>
      <section className="row">
        <h2 className="row-title">{title}</h2>

        <div className="row-posters">
          {movie?.map((item, id) => (
            <img
              key={id}
              className={`row-poster ${isLarge && "row-posterLarge"}`}
              src={`${baseUrlImg}${
                isLarge ? item.poster_path : item.backdrop_path
              }`}
              alt={item.title}
              onClick={() => trailerFunction(item)}
            />
          ))}
        </div>
        <div>
          
          {trailerUrl && (
            <YouTube
              videoId={trailerUrl}
              opts={{
                height: "390",
                width: "100%",
                playerVars: {
                  autoplay: 1,
                },
              }}
            />
          )}
        </div>
      </section>
    </>
  );
}

export default SingleRow;
