import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  // api call
  const [countriesData, setCountriesData] = useState(null)

  useEffect(() => {
    const baseURL = `https://restcountries.com/v3.1/all`
      axios.get(baseURL).then((response) => {
        setCountriesData(response.data)
      })
  }, [])

  console.log(countriesData)

  return (
    <div className="App">
      <p>it works...</p>
    </div>
  );
}

export default App;
