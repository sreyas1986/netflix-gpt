import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[22%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div>
            <button className='bg-white text-black text-lg px-12 p-4 w-1/7 mx-3 opacity-3 rounded hover:bg-opacity-80'>
                Play </button>
               <button className='bg-gray-300 text-black text-lg px-12 p-4 w-1/7 mx-3 opacity-4 rounded'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle