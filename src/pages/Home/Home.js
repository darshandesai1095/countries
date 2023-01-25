import './Home.css'
import React from 'react';
import { useSelector } from 'react-redux'
import CountryCard from '../../components/CountryCard/CountryCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import Dropdown from '../../components/Dropdown/Dropdown';
import useApi from '../../functions/useApi.js';


function Home() {

    const {countriesData, error, loading} = useApi()
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
                {countriesData?.map((country,i) => (
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