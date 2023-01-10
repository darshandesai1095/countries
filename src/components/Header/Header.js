import './Header.css'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';


function Header() {


    return (
        <div className='header'>
            <h1>Where in the world?</h1>
            <div className='header__darkmode'>
                <DarkModeOutlinedIcon className='darkmode-icon'/>
                <p>Dark Mode</p>
            </div>
        </div>
    )
}

export default Header