import './Dropdown.css'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setEndpoint } from '../../redux/features/endpointSlice'


function Dropdown() {

    const [dropdownActive, setDropdownActive] = useState(false)
    const regions = ["Africa", "America", "Asia", "Europe", "Oceana"]
    const search = useSelector((state) => state.search.value)
    const theme = useSelector((state) => state.theme.value)
    const dispatch = useDispatch()

    const buttonStyle = {
        light: {
            backgroundColor: 'white',
            boxShadow:'0px 0px 10px #dee2e6',
            color: '#495057',
            border: '1px solid white'
        },

        dark: {
            backgroundColor: '#435567',
            boxShadow:'0px 0px 10px #304346',
            color: 'white',
            border: '1px solid #435567'
        }
    }

    const dropdownMenuStyle = {
        light: {
            backgroundColor: 'white',
            color: '#495057',
        },

        dark: {
            backgroundColor: '#435567',
            color: 'white',

        }
    }

    return (
        <div 
            onClick={() => setDropdownActive(dropdownActive => !dropdownActive)}
            onMouseLeave={() => setDropdownActive(false)}
        >

            <button style={theme.darkTheme ? buttonStyle.light : buttonStyle.dark}>
                <span>Filter by Region</span>
                <span className='dropdown__bold'>⌄</span>
            </button>

            <div className='dropdown__spacer'></div>

           {
                dropdownActive
                &&
                <div className='dropdown__options' style={theme.darkTheme ? dropdownMenuStyle.light : dropdownMenuStyle.dark}>
                    {regions.map(region => (
                        <p 
                            style={theme.darkTheme ? dropdownMenuStyle.light : dropdownMenuStyle.dark}
                            onClick={() => dispatch(setEndpoint(`region/${region}`))} >
                                {region}
                        </p>
                        ))
                    }
                </div>
            }

        </div>

    )
}

export default Dropdown