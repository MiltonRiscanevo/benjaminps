import './App.css';
import React,{useState} from 'react';
import Navbar from './components/NavBar'
import Grid from './components/Grid'

function App(props) {
 
 
  return (
    <div className="App">
     <Navbar/>   
     <Grid/>     
    </div>
  );
}

export default App;
