import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Row from './Row'
import requests from './Request'

function HomePage(){
  return (
    <div>
      <Navbar />
      <Banner />
      <Row genre="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row genre="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row genre="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row genre="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row genre="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row genre="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row genre="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row genre="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomePage