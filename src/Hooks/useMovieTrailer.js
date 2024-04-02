import  { useEffect }  from 'react'
import { API_options, VideoAPIURL } from '../util/constant'
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../util/moviesSlice';

const useMovieTrailer = (id) => {

    const dispatch = useDispatch();
    let VideoAPIURL_bg= VideoAPIURL.replace("{movie_id}",id);
  
  const movieBackground = async () => {
    
   const bgMovies= await fetch(VideoAPIURL_bg,API_options);
   const bgMoviesResult =  await bgMovies.json();
   

   const filterData = bgMoviesResult.results.filter((video) => video.type==="Trailer");
   const Trailer= filterData[1];//filterData.length===0? filterData[filterData.length-1]:  bgMoviesResult.results[0];
   console.log(Trailer);
   // We can set  2ways to pass the trailer data one is using useState 
   //another is using store becasue store is already cretaed we better to use the store as a standard of keepign state
   dispatch(addTrailerVideo(Trailer));

  }
  
  useEffect(()=> {
    movieBackground();
  },[]);
  
}

export default useMovieTrailer