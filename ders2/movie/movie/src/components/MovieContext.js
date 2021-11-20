import React, {createContext, useState} from 'react'

export const MovieContext =  createContext();

export  const MovieProvider = props => {
    const [movies, setMovie] =  useState([
        {
          id: 1,
          name: "Inception",
          price: "10$"
        },
        {
            id: 2,
            name: "Dune",
            price: "15$"
          },
       
          {
            id: 3,
            name: "Matrix",
            price: "20$"
          }
    ]);
    return(
      < MovieContext.Provider value={[movies, setMovie]} >
        {props.children}
      </MovieContext.Provider>
    )
}