import { NavLink } from 'react-router-dom'
import '../../Sass/components/_Banner.scss'
import logo from './images/logo-aa-info-texte.png'

export default function Header() {
  return (<>
    <div className='header'>
    <NavLink to="/"><img src={logo} alt='Logo Aa'/></NavLink>
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/Apropos">A propos</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
      </nav>
    </div>
    </>)
}