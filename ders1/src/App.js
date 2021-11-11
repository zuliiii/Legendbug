import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <Navbar 
      home = "Home378"
      about = "About 1111"
      blog = "Blog1"
      contact = "Contacttt"

      />
      <Navbar 
      home = "Home98"
      about = "About9911"
      blog = "Blog00"
      contact = "Contact77"

      />
     <User
     ad = "zuleyxa"
     yas = "20"
     maas = "4000"
     />
    </div>
  );
}

export default App;
