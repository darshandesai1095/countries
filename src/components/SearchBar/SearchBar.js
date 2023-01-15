import './SearchBar.css'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSearch } from '../../redux/features/searchSlice'
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {

    const search = useSelector((state) => state.search.value)
    const theme = useSelector((state) => state.theme.value)
    const dispatch = useDispatch()

    const searchBar = {
        darkMode: {
            color: 'white',
            backgroundColor: '#435567',
            border: 'none'
        },
        lightMode: {
            color: '#212529',
            backgroundColor: 'white',
        }
    }

    return (
        <form className={`search-bar ${theme.darkTheme? "search-bar--light" : "search-bar--dark"}`} >

            
            <SearchIcon className={`search-icon ${theme.darkTheme? "search-icon--light" : "search-icon--dark"}`} />

            <input
                type="text"
                placeholder="Search for a country..."
                value={search.searchEntry}
                onChange={(e) => dispatch(setSearch(e.target.value))}
            />

        </form>
    )
}

export default SearchBar