import './App.css';
import React,{useState} from 'react';
import Navbar from './components/NavBar'
import Grid from './components/Grid'
import Testeo from './components/Testeo'

function App(props) {
 
 
  return (
    <div className="App">
     <Navbar/>   
     <Grid/>
     <Testeo/>     
    </div>
  );
}

export default App;
