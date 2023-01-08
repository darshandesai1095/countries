import React from "react";
import './CountryCard.css'

export default function CountryCard(props) {

    return (
        <div className="country-card">

            <img src={props.country.flags.png}/>
            <div className="description">
                <h4 className="title">{props.country.name.common}</h4>
                <p><span className="bold">Population: </span>{props.country.population}</p>
                <p><span className="bold">Region: </span>{props.country.region}</p>
                <p><span className="bold">Capital: </span>{props.country.capital}</p>
            </div>

        </div>
    )
}