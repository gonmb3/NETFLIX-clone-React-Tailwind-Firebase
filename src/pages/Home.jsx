import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'

import requests from '../requests'

const Home = () => {
  return (
    <div className='text-white'>
        <Main/>
        <Row rowID ="1" title="Up Comming" fetchURL={requests.requestsUpComming} />
        <Row rowID ="2" title="Popular" fetchURL={requests.requestsPopular} />
        <Row rowID ="3" title="Top Rated" fetchURL={requests.requestsTopRated} />
        <Row rowID ="4" title="Recommendations" fetchURL={requests.requestsRecommendations} />
        <Row rowID ="5" title="Now Playing" fetchURL={requests.requestsNowPlaying} />
    </div>
  )
}

export default Home