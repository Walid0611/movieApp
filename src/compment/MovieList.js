import React from 'react'
import MovieCard from './MovieCard'

export default function MovieList({ListMovies}) {


  return (
    <div className='movieListeContainer'         >
    {
      ListMovies.map((e)=> <MovieCard movie={e}      />        )
    }


    
    
    
    
    </div>
  )
}
