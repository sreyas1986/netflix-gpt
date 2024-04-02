import { useEffect } from 'react'
import { API_options, MovieAPIURL } from '../util/constant'
import { useDispatch } from 'react-redux'
import { addPlayingMovies } from '../util/moviesSlice'

const usePlayingMovies = () => {

    const dispatch = useDispatch();
const getMovies = async () =>{

  const data = await fetch(MovieAPIURL,API_options);
  const json = await data.json();
  
  dispatch(addPlayingMovies(json.results));
}
  useEffect(()=>{

    getMovies()  },[]);

};


export default usePlayingMovies;