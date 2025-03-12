import React from 'react'
import { POSTER_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-36 md:w-48 pr-4'>
        <img alt="Movie Card" src={POSTER_CDN + posterPath} />
    </div>
  )
}

export default MovieCard