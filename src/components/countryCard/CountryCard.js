import React from "react";
import './CountryCard.css'
import { useSelector, useDispatch } from 'react-redux'

export default function CountryCard(props) {

    const population = props.country.population.toLocaleString("en-US")
    const region = props.country.region
    const capital = props.country.capital

    const theme = useSelector((state) => state.theme.value)

    const countryCard = {
        darkMode: {
            color: 'white',
            backgroundColor: '#435567',
            boxShadow: '0px 3px 5px #304346',
        },
        lightMode: {
            color: '#212529',
            backgroundColor: 'white',
        }
    }

    return (
        <div    className="country-card" 
                style={theme.darkTheme? countryCard.lightMode : countryCard.darkMode}
                onClick={()=>console.log(`${props.country.name.common} clicked`)}
        >

            <img src={props.country.flags.png}/>
            <div className="description">
                <h4 className="title">{props.country.name.common}</h4>
                <p><span className="bold">Population: </span>{population}</p>
                <p><span className="bold">Region: </span>{region}</p>
                <p><span className="bold">Capital: </span>{capital}</p>
            </div>

        </div>
    )
}