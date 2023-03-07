import {useState} from "react";
import Filter from "./compment/Filter";
import Navbar from "./compment/Navbar";
import MovieList from "./compment/MovieList";
import Add from "./compment/Add";
import { movies } from "./compment/Datta"



console.log('test',movies)
function App() {
  const [ListMovies ,setListMovie]=useState(movies) 


  
  return (
    <div className="App">
   <Navbar/>
    <Filter/>
  <Add/>
<MovieList  ListMovies={ListMovies}  />







    </div>
  );
}

export default App;
