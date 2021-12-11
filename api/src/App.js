import React, { Component } from 'react'
import Axios from './pages/Axios'
import Fetch from './pages/Fetch'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Color from './Color'
import {BrowserRouter, Route, Switch} from 'react-router-dom'


 class App extends Component {
   render() {
      return (
        <div>
          <BrowserRouter>
          < Navbar/>
          <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/fetch" component={Fetch}></Route>
          <Route path="/axios" component={Axios}></Route>
          </Switch>
          </BrowserRouter>
          <Color />
        </div>
      )
  }
}

export default App





