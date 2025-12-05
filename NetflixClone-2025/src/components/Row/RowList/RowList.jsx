import React, { useState } from 'react'
import './Rowlist.css'
import SingleRow from'../SingleRow/SingleRow'
import requests, { baseUrlImg } from "../../../utils/request.js";
function RowList() {

  
  return (
    <>
      <SingleRow
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge={true}
      />

      <SingleRow title="Trending Now" fetchUrl={requests.fetchTrending} />
      <SingleRow title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <SingleRow title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <SingleRow title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <SingleRow title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <SingleRow title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <SingleRow title="TV Shows" fetchUrl={requests.fetchTvShow} />
      <SingleRow title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </>
  );
}

export default RowList;
