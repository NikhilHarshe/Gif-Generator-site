import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const Tag = () => {

  const [tag, setTag] = useState('car');
  const { gif, loading, fetchData } = useGif(tag);

  return (
    <div className=' w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] '>

      <h1 className='text-2xl mt-[15px] underline uppercase font-bold'>Random {tag} Gif</h1>

      {
        loading ? (<Spinner />) : (<img src={gif} alt='Gif' width="450"></img>)
      }

      <input
        className=' w-10/12 text-lg py-2 rounded-lg mb-[3px]
       text-center' onChange={(event) => setTag(event.target.value)} value={tag}
      />
      <button className='bg-white mb-[20px] w-10/12 text-lg py-2 rounded-lg' onClick={() => fetchData(tag)}>
        Generate
      </button>
    </div>
  )
}

export default Tag
