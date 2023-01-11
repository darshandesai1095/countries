import './Dropdown.css'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'


function Dropdown() {

    const [dropdownActive, setDropdownActive] = useState(false)
    const regions = ["Africa", "America", "Asia", "Europe", "Oceana"]
    const search = useSelector((state) => state.search.value)
    const dispatch = useDispatch()

    return (
        <div
            classname="dropdown" 
            onClick={() => setDropdownActive(true)}
            onMouseLeave={() => setDropdownActive(false)}
        >

            <button>
                <span>Filter by Region</span>
                <span className='dropdown__bold'>⌄</span>
            </button>

           {
                dropdownActive
                &&
                <div className='dropdown__options'>
                    {regions.map(region => (<p>{region}</p>))}
                </div>
            }

        </div>

    )
}

export default Dropdown