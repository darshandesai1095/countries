import './App.css';
import React, { useState, useEffect } from 'react';
import CountryCard from './components/countryCard/CountryCard.js';
import axios from 'axios';

function App() {

  // api call
  const [countriesData, setCountriesData] = useState([])

  useEffect(() => {
    const baseURL = `https://restcountries.com/v3.1/all`
      axios.get(baseURL).then((response) => {
        setCountriesData(response.data)
      })
      console.log(countriesData)
  }, [])


  return (
    <div className="App">
      {countriesData.map((country,i) => (
        <CountryCard 
                  key={i}
                  country={country}
                  identifier={i}   />
      ))}
    </div>
  );
}

export default App;
