import React from 'react';
import useApi from '../../functions/useApi';
import './CountryInfo.css'

function CountryInfo() {

const country = useApi().countriesData[0]
console.log(country)

const languagesObj = country?.languages
let languages = Object.keys(languagesObj).map(lang => languagesObj[lang]).join(', ')

  return (
    <div className='country-info'>

        <img src={country?.flags.png}/>

        <div className=''>

            <h4>{country?.name.common}</h4>

            <div className='country__primary-info'>
                <p><span>Native Name:</span> {country?.name.official}</p>
                <p><span>Population:</span> {country?.population.toLocaleString("en-US")}</p>
                <p>Region: {country?.region}</p>
                <p>Sub Region: {country?.subregion}</p>
                <p>Capital: {country?.capital}</p>
            </div>

            <div className='country__secondary-info'>
                <p>Top Level Domain: {country?.tld[0]}</p>
                <p>Currencies: {country?.name.official}</p>
                <p>Languages: {languages}</p>
            </div>


            <button>Border Countries</button>

        </div>

    </div>
  );
}

export default CountryInfo;
