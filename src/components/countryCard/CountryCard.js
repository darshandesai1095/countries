import React from "react";
import './CountryCard.css'

export default function CountryCard(props) {

    const population = props.country.population.toLocaleString("en-US")
    const region = props.country.region
    const capital = props.country.capital

    return (
        <div className="country-card">

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