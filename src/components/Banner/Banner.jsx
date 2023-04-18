import { Link } from 'react-router-dom'
import './Banner.scss'
import logo from './images/logo-aa.png'

function Header() {
  return (
<>
    <div className='header'>
    <Link to="/"><img src={logo} alt='Logo Kasa'/></Link>
    <div className='menu'>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/Apropos">A propos</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
      </div>
    </div>
    </>
  )
}

export default Header; 

