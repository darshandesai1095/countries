import './SearchBar.css'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSearch } from '../../redux/features/searchSlice'
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {

    const search = useSelector((state) => state.search.value)
    const dispatch = useDispatch()

    return (
        <div className='search-bar'>

            <SearchIcon className='search-icon'/>

            <input
                type="text"
                placeholder="Search for a country..."
                value={search.searchEntry}
                onChange={(e) => dispatch(setSearch(e.target.value))}
            />

        </div>
    )
}

export default SearchBar