import './App.css';
import React, { useState, useEffect } from 'react';
import CountryCard from './components/countryCard/CountryCard.js';
import Header from './components/Header/Header.js';
import Home from './pages/Home/Home.js';
import axios from 'axios';

function App() {

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
    <div className="App">

      <Header/>
      <Home/>

    </div>
  );
}

export default App;
