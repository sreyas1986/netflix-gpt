import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        PlayingMovies : null,
        TrailerVideo:null,
    },
    reducers:{
        addPlayingMovies:(state,action)=>{
            state.PlayingMovies = action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.TrailerVideo = action.payload;
        },
 
    }, 
    
});

export const {addPlayingMovies,addTrailerVideo} = moviesSlice.actions;
export default moviesSlice.reducer;