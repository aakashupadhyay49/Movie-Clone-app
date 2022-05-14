import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
import MovieListing from '../MovieListing/MovieListing'

const Home = () => {
    const Movietext="Harry";
    const showText="friends"
    const dispatch=useDispatch()
    useEffect(()=>{
        
     dispatch(fetchAsyncMovies(Movietext))
     dispatch(fetchAsyncShows(showText))  

       
    },[dispatch])

  return (
    <div>
        <div className='banner-img'></div>
        <MovieListing/>
    </div>
  )
}

export default Home