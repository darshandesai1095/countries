import './Home.css'
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import axios from 'axios';
import { useSelector } from 'react-redux'

function apiFunc() {

    // api call
    const [countriesData, setCountriesData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const endpoint = useSelector((state) => state.endpoint.value.endpoint)

    useEffect(() => {
        const baseURL = `https://restcountries.com/v3.1/${endpoint}`
        axios.get(baseURL).then((response) => {
            setLoading(true)
            setCountriesData(response.data)
        }).catch(error => {
            // "Request failed with status code 404")
            setError(error.message)
        }).finally(setLoading(false))
    }, [endpoint])

    return (
        {countriesData, error, loading}
    )
}

export default apiFunc