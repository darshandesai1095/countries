import React from 'react';
import useApi from '../../functions/useApi';

function CountryInfo() {

const country = useApi().countriesData[0]
console.log("COUNTRY: ", country)

  return (
    <div>
        <img src={country.flags?.png}/>
        <h4>{country.name.common}</h4>

        <div className='country__primary-info'>
            <p><span>Native Name:</span> {country.name.official}</p>
            <p><span>Population:</span> {country.name.official}</p>
            <p>Region: {country.region}</p>
            <p>Sub Region: {country.subregion}</p>
            <p>Capital: {country.capital}</p>
        </div>

        <br></br>

        <div className='country__secondary-info'>
            <p>Top Level Donain: {country.name.official}</p>
            <p>Currencies: {country.name.official}</p>
            <p>Languages: {country.name.official}</p>
        </div>


        <button>Border Countries</button>

    </div>
  );
}

export default CountryInfo;
