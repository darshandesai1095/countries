import './Header.css'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useSelector, useDispatch } from 'react-redux'
import { switchTheme } from '../../redux/features/themeSlice'
import { setEndpoint } from '../../redux/features/endpointSlice'


function Header() {

    const header = {
        darkMode: {
            backgroundColor: '#435567',
            boxShadow: '0px 3px 5px #304352',
            color: 'white'
        },
        lightMode: {
            backgroundColor: 'white',
            boxShadow: '0px 3px 5px #e9ecef'
        }
    }

    const theme = useSelector((state) => state.theme.value)
    const dispatch = useDispatch()

    return (
        <div className='header' style={theme.darkTheme? header.lightMode : header.darkMode}>
            <h1 onClick={() => dispatch(setEndpoint(`all`))}>
                Where in the world?
            </h1>
            <div className='header__darkmode' onClick={() => dispatch(switchTheme())}>
                {
                 theme.darkTheme ?
                 <DarkModeOutlinedIcon className='darkmode-icon'/>
                 :
                 <DarkModeIcon className='darkmode-icon'/>
                }
                <p>{theme.darkTheme? "Light Mode" : "Dark Mode"}</p>
            </div>
        </div>
    )
}

export default Header