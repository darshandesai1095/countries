import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header.js';
import Home from './pages/Home/Home.js';
import Country from './pages/Country/Country';
import axios from 'axios';
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
  // // api call
  // const [countriesData, setCountriesData] = useState([])

  // useEffect(() => {
  //   const baseURL = `https://restcountries.com/v3.1/all`
  //     axios.get(baseURL).then((response) => {
  //       setCountriesData(response.data)
  //     })
  //     console.log(countriesData)
  // }, [])



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
