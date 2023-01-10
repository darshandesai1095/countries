import './Header.css'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useSelector, useDispatch } from 'react-redux'
import { switchTheme } from '../../redux/features/themeSlice'


function Header() {

    const theme = useSelector((state) => state.theme.value)
    const dispatch = useDispatch()

    return (
        <div className='header'>
            <h1>Where in the world?</h1>
            <div className='header__darkmode' onClick={() => dispatch(switchTheme())}>
                <p>{theme.darkTheme? "dark" : "light"}</p>
                <DarkModeOutlinedIcon className='darkmode-icon'/>
                <p>Dark Mode</p>
            </div>
        </div>
    )
}

export default Header