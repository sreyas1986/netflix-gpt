import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.PlayingMovies);
    
    if(!movies) return;
    const mainMovie = movies[0];
    
    
    const { id,original_title, overview } = mainMovie;

  return (
    <div>
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground id={id}/>
    </div>
  )
}

export default MainContainer