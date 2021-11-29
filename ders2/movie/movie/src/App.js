import { Component } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Nav from './components/Nav'
import AddMovie from './components/AddMovie';

class App extends Component {
   
  render() {
      return (
        <div className="App">
         <Nav />
         <MovieList />
        < AddMovie />
        
        
      </div>
      )
    }
    
  }

export default App;
