import React from 'react'
import "./Filter.css"
const Filter = ({setFilter}) => {
  return (
    <div>
    <div className="box">
      <form name="search">
        <input
          type="text"
          className="inputSearch"
          name="txt"
          onChange={(e)=>setFilter(e.target.value)}
        />
      </form>
      <i className="fas fa-search" />
    </div>
    <a href="https://www.youtube.com/c/ShortCode" target="_blank" id="ytb">
      <i className="fab fa-youtube"> </i>
    </a>
  </div>
  )
}

export default Filter
