import React, { useState } from 'react'
import AddMovie from './Components/AddMoive'
import MovieList from './Components/MovieList'
import Search from './Components/Search'
import {movies} from './data/MovieData'

const App = () => {
  
  const [ListMovie,setListMovie]=useState(movies)
       
const handelAddMovie=(newMovie)=>{
setListMovie(
  [...ListMovie,newMovie]
)
}



const [nameSearch,setNAmeSearch]=useState('')

  return (
    <div>
      
      <Search  setNAmeSearch={setNAmeSearch} />


      <MovieList ListMovie={ListMovie}  nameSearch={nameSearch}/>

      <hr/>
      
      <AddMovie  handelAddMovie={handelAddMovie}/>
    </div>
  )
}

export default App