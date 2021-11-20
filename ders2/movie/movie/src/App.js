import { Component } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Nav from './components/Nav'

class App extends Component {
  
  render() {
    return (
      <div className="App">
       <Nav />
       <MovieList />
     
    </div>
    )
  }
}
export default App;
