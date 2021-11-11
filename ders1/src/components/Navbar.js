import React, { Component } from 'react'

 class Navbar extends Component {
    render() {
        const {home, about, blog, contact} =  this.props
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#"> {home} <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">{about}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">{blog}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">{contact}</a>
            </li>
          </ul>
        </div>
      </nav>
            </div>
        )
    }
}

export default Navbar
