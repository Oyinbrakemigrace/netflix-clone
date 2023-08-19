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
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}

export default HomePage