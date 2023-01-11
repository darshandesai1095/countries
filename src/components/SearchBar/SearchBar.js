import './SearchBar.css'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSearch } from '../../redux/features/searchSlice'

function SearchBar() {

    const searchVal = useSelector((state) => state.search.value)
    const dispatch = useDispatch()

    return (
        <div className='search-bar'>
            <input
                type="text"
                value={searchVal}
                onChange={(e) => useDispatch(setSearch(e.target.value))}

            />
        </div>
    )
}

export default SearchBar