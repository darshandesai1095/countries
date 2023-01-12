import './Home.css'
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import CountryCard from '../../components/CountryCard/CountryCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import Dropdown from '../../components/Dropdown/Dropdown';
import axios from 'axios';


function Home() {

    // api call
    const [countriesData, setCountriesData] = useState([])

    useEffect(() => {
        const baseURL = `https://restcountries.com/v3.1/all`
        axios.get(baseURL).then((response) => {
            setCountriesData(response.data)
        })
        console.log(countriesData)
    }, [])

    const theme = useSelector((state) => state.theme.value)

    const home = {
        darkMode: {
            color: 'white',
            backgroundColor: '#324554',
        },
        lightMode: {
            color: '#212529',
            backgroundColor: '#f8f9fa',
        }
    }

    return (

        <div className='home' style={theme.darkTheme? home.lightMode : home.darkMode}>

            <div className='home__nav'>
                <SearchBar/>
                <Dropdown/>
            </div>


            <div className='home__grid'>
                {countriesData.map((country,i) => (
                    <CountryCard 
                            key={i}
                            country={country}
                            identifier={i}   />
                ))}
            </div>

        </div>
        

    )
}

export default Home