import React from 'react'

import {  useSelector } from 'react-redux';
import useMovieTrailer from '../Hooks/useMovieTrailer';


const VideoBackground = ({id}) => {

  useMovieTrailer(id);
  const trailerVideo= useSelector(store => store.movies.TrailerVideo);
  console.log(trailerVideo);
  if(!trailerVideo) return;
  
  //trailerVideo.key

  return (
    <div>
        <iframe  src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?autoplay=1&mute=1"} className='w-screen aspect-video'
        title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write;
         encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
         ></iframe>
    </div>
  )
}

export default VideoBackground