import React from 'react'
import './MoviesCard.css'
import Rate from './Rate'

export default function MovieCard({movie}) {

  return (
    <div>
    <section className="articles">
    <article>
      <div className="article-wrapper">
        <figure>
          <img src={movie.PosterURL} alt="" />
        </figure>
        <div className="article-body">
          <h2>{movie.Title}</h2>
          <p>
           {movie.Description}
          </p>
          <p>
          {movie.Rate}
          </p>
          <a href="#" className="read-more">
            Read more <span className="sr-only">about this is some title</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        <Rate  rate={movie.rate}          />
      </div>
    </article>
    
  </section> 
    
    
    
    
    </div>
  )
}
