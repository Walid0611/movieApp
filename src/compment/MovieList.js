import React from 'react'
import MovieCard from './MovieCard'

export default function MovieList({ListMovies}) {


  return (
    <div className='movieListeContainer'         >
    {
      ListMovies.map((el,key)=> <MovieCard  key={el.id}        movie={el}     />        )
    }


    
    
    
    
    </div>
  )
}
