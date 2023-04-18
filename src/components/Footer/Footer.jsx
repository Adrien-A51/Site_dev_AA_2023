import { Link } from 'react-router-dom';
import './Footer.scss'
import Logo from './images/logo-aa-info.png'

function Footer() {
    return (
  <>
    <div className='footer'>
    <p><Link to="/"><img src={Logo} alt='Logo Kasa n&b'/></Link><br></br>
    Adrien Abdalalim - Développeur Web & React</p>
      <div className='menu-footer'>
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
  
  export default Footer; 