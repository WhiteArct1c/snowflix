import {Link} from 'react-router-dom'
import './header.css'

function Header(){
    return(
        <header>
            <Link to='/' className='logo'>SnowFlix</Link>
            <Link to='/favoritos' className='favoritos'>Meus favoritos</Link>
        </header>
    )
}

export default Header