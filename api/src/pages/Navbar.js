import React, {useState}  from 'react'
import {Link} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'
import {GlobaslStyle, LightTheme, DarkTheme} from '../themes'

function Navbar() {
  const [theme, setTheme] = useState('light');

  const ThemeToggler1 = () =>{
    theme === "light" ? setTheme("dark") : setTheme("light")
}

    return (
      <ThemeProvider theme = {theme ==="light" ? LightTheme : DarkTheme}>
        <GlobaslStyle  />
       
             <nav className="navbar navbar-expand-lg">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            
            <li className="nav-item">
              <Link to="/fetch"> <h1>Fetch</h1></Link>
            </li>
            <li className="nav-item">
            <Link to="/axios"><h1>Axios</h1></Link>
            </li>
          </ul>
        </div>
    
      </nav>
        
        </ThemeProvider>
    )
}
export default Navbar
