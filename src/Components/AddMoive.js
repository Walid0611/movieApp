import React, { useState } from 'react'
import './AddMovie.css';


const AddMovie = ({handelAddMovie}) => {
  
  const [Title,setTitle]=useState('')
  const [Description,setDescription]=useState('')
  const [Rate,setRate]=useState('')
  const [PosterURL,setPosterURL]=useState('')


const handel=()=>{
  handelAddMovie(
    {
      Title:Title,
      Description:Description,
      PosterURL:PosterURL,
      Rate:Rate
    }
  )
}
  return (
    <div className='bodyForm'>
      <div className="form">
  <div className="title">Welcome</div>
  <div className="subtitle">Let's create your Movie!</div>
  <div className="input-container ic1">

   
    <input id="firstname" className="input" type="text" value={Title} onChange={(el)=>setTitle(el.target.value)} placeholder="Title Movie" />
 


    <div className="cut" />
    <label htmlFor="firstname" className="placeholder">
    </label>
  </div>
  <div className="input-container ic2">
    
    <input id="lastname" className="input" type="text" placeholder=" Movie Poster " value={PosterURL} onChange={(el)=>setPosterURL(el.target.value)}   />

    <div className="cut" />
    <label htmlFor="lastname" className="placeholder">
     
    </label>
  </div>
  <div className="input-container ic2">
    
    <input id="email" className="input" type="text" placeholder=" Movie Description " value={Description} onChange={(el)=>setDescription(el.target.value)}  />

    <div className="cut cut-short" />
    <label htmlFor="email" className="placeholder">
     
    </label>
  </div>
  <div className="input-container ic2">
    
    <input id="email" className="input" type="text" placeholder="Movie Rate " value={Rate} onChange={(el)=>setRate(el.target.value)}  />


    <div className="cut cut-short" />
    <label htmlFor="email" className="placeholder">
      
    </label>
  </div>
  <button type="button" className="submit" onClick={()=>handel()}  >
    Ajout Movie
  </button>
</div>
    </div>
  )
}

export default AddMovie