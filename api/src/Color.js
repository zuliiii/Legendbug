import React, {useState} from 'react'
import {ThemeProvider} from 'styled-components'
import {GlobaslStyle, LightTheme, DarkTheme} from './themes'

 function Color() {
     const [theme, setTheme] = useState('light');

     const ThemeToggler = () =>{
         theme === "light" ? setTheme("dark") : setTheme("light")
     }
    return (
        <ThemeProvider theme = {theme ==="light" ? LightTheme : DarkTheme}>
            <GlobaslStyle  />
           <h1>Color</h1>
           <p>2ci Reng</p>
         <div className="card" style={{width: '18rem'}}>
         <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         </div>
         </div>
           <button onClick={ThemeToggler}>Change Color</button>
        
        </ThemeProvider>
    )
}
export default Color