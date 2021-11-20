import React, { Component, useContext } from 'react'
import Movie from './Movie'
import { MovieContext } from './MovieContext'

 const Nav= ()=> {
  const [movies, setMovie] = useContext(MovieContext);
      return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
         <h3>filmlerin sayi: {movies.length} </h3>
        </div>
      </nav>
            </div>
        )
   
}

export default Nav
