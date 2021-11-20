import React, {useState, useContext} from 'react'
import Movie from './Movie';
import { MovieContext } from './MovieContext';

const MovieList =() => {
    const [movies, setMovie] = useContext(MovieContext);

    return (
        

       movies.map(movie => (
               <Movie name={movie.name} price={movie.price} key={movie.id} />
               
       ))

    // movies.map(movie => ( 
    //     <li>{movie.name}</li>
    // ))

    )
}
export default MovieList;