import React, {useContext, useState } from 'react'
import { MovieContext } from './MovieContext'

const AddFilm = () =>{
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [movies, setMovie] = useContext(MovieContext);

    const updateName = e =>{
        setName(e.target.value);
    };

    const updatePrice = e =>{
        setPrice(e.target.value);
    };
    
    const updateMovie = e =>{
        e.PreventDefault();
        setMovie(prevMovies => [...prevMovies, {name: name, price: price}])
    };
      

    return (
        
          <form className="form"  onSubmit={updateMovie} >
              
              <input type="text" name="name" placeholder= "add movie name" value={name} onChange={updateName} />
              <input type="text" name="price" placeholder= "add price" value={price} onChange={updatePrice} />
              <button>Add</button>
          </form>
       
    )
}
export default AddFilm;