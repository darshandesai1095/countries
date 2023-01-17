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
        light: {
            backgroundColor: 'white',
            boxShadow: '0px 0px 10px #dee2e6',
            border: '1px solid white'
        },
        dark: {
            backgroundColor: '#435567',
            boxShadow: '0px 0px 10px #304346',
            border: '1px solid #304346'

        }
    }

    const searchIcon = {
        light: {
            color: '#6c757d',
            border: '1px solid white',
            transition: '0.2s'
        },
        dark: {
            color: 'white',
            border: '1px solid #435567',
            transition: '0.2s'
        }
    }

    const inputElStyle = {
        light: {
            color: '#343a40'
        },

        dark: {
            color: 'white',
            backgroundColor: '#435567'
        }
    }

    return (
        <form   className={`search-bar ${theme.darkTheme ? "search-bar--light" : "search-bar--dark"}`}
                style={theme.darkTheme ? searchBar.light : searchBar.dark} >

            
            <SearchIcon className={`search-icon ${theme.darkTheme ? "search-icon--light" : "search-icon--dark"}`}
                        style={theme.darkTheme ? searchIcon.light : searchIcon.dark}/>

            <input
                style={theme.darkTheme ? inputElStyle.light : inputElStyle.dark}
                type="text"
                placeholder="Search for a country..."
                value={search.searchEntry}
                onChange={(e) => dispatch(setSearch(e.target.value))}
            />

        </form>
    )
}

export default SearchBar