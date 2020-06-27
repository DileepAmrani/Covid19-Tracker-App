import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Home/Home"
import {CovidProvider} from "./Components/Context/GlobalState"
function App() {
  
  return (
    <CovidProvider>
    <div className="App">      
     <Navbar/>
       <Home/>
    
    </div>
    </CovidProvider>
  );
}

export default App;
