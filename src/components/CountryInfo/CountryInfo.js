import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import useApi from '../../functions/useApi';
import './CountryInfo.css'

function CountryInfo() {

const {countriesData} = useApi()
const country = countriesData[0]

const languagesObj = country?.languages

const [languages, setLanguages] = useState([])
const [region, setRegion] = useState([])

useEffect(() => {
  if (languagesObj) {
    setLanguages(Object.keys(languagesObj).map(lang => languagesObj[lang]).join(', '))
    setRegion(Object.keys(country?.currencies)[0])
  }
}, [countriesData])

const borderCountries = country?.borders.map(country => {
  return (
    <button classname="country" key={country}>{country}</button>
  )
})

const theme = useSelector((state) => state.theme.value)
const color = {
  darkMode: {
      color: 'white'
  },
  lightMode: {
  }
}

  return (
    <div className='country-info' style={theme.darkTheme? color.lightMode : color.darkMode}>

        <img className="country-flag" src={country?.flags.png}/>

        <div className='country-data'>

            <h4>{country?.name.common}</h4>

            <div className="country-facts">

              <div className='country__primary-info'>
                  <p>Native Name: <span className='light'>{country?.altSpellings[1]}</span></p>
                  <p>Population: <span className='light'>{country?.population.toLocaleString("en-US")}</span></p>
                  <p>Region: {country?.region}</p>
                  <p>Sub Region: {country?.subregion}</p>
                  <p>Capital: {country?.capital}</p>
              </div>

              <div className='country__secondary-info'>
                  <p>Top Level Domain: {country?.tld[0]}</p>
                  <p>Currencies: 
                    {/* {country?.currencies[region].name} */}
                  </p>
                  <p>Languages: {languages}</p>
              </div>

            </div>


            <div className='country__border'>
              <p>Border Countries:</p>
              {borderCountries}
            </div> 
            {/* add hash table: 3 letter country code -> country name */}

        </div>

    </div>
  );
}

export default CountryInfo;
