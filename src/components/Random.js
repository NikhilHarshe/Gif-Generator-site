import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

// const API_KEY = "rCuW0fE20nq9GlCnFqUSlLP8jcUMXCrA"
const Random = () => {
  

  const {gif, loading, fetchData} = useGif();
  return (
    <div className=' w-1/2  bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] '>
      <h1 className='text-2xl mt-[15px] underline uppercase font-bold'>A Random Gig</h1>

      {
        loading ? (<Spinner/>) : (<img src={gif} alt='Gif' width="450"></img>)
      }
      
      <button onClick={() => fetchData()}
      className='bg-white mb-[20px] w-10/12 text-lg py-2 rounded-lg' >
        Generate
      </button>
    </div>
  )
}

export default Random
