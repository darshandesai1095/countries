import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header.js';
import Home from './pages/Home/Home.js';
import Country from './pages/Country/Country';
import { useSelector } from 'react-redux'

function App() {
  
  const theme = useSelector((state) => state.theme.value)
  const bkgStyle = {
    darkMode: {
        backgroundColor: '#324554',
    },
    lightMode: {
        backgroundColor: '#f8f9fa',
    }
}

  return (
    <div  className="App"
          style={theme.darkTheme ? bkgStyle.lightMode : bkgStyle.darkMode}>

      <Header/>
      {/* <Home/> */}
      <Country/>

    </div>
  );
}

export default App;
