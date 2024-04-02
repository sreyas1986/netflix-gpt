import React from 'react'
import Header from './Header'
import usePlayingMovies from '../Hooks/usePlayingMovies'
import MainContainer from './MainContainer';


const Browse = () => {
  usePlayingMovies();

  return (
    
    <div className='z-20'>
      <Header />
      <MainContainer />
      </div>
  )
}

export default Browse