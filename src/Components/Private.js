import React from "react";
import Banner from "./Banner";
import Row from "./Row";
import Request from "./Request";
function Private() {
  return (
    <div>
      <Banner />
      <Row
        title="Netflix Originals"
        fetchURL={Request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={Request.fetchTrending} />
      <Row title="Top rated" fetchURL={Request.fetchTopRated} />
      <Row title="Action movies" fetchURL={Request.fetchActionMovies} />
      <Row title="Comedy movies" fetchURL={Request.fetchComedyMovies} />
      <Row title="Horror movies" fetchURL={Request.fetchHorrorMovies} />
      <Row title="Romance movies" fetchURL={Request.fetchRomanceMovies} />
      <Row title="Documentaries movies" fetchURL={Request.fetchDocumentaries} />
    </div>
  );
}

export default Private;
