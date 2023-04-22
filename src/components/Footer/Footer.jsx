import { Link } from 'react-router-dom';
import '../../Sass/components/_Footer.scss'
import Logonb from './images/logonb.png'

export default function Footer() {
    return (<>

    <div className='footer'>
    <p><Link to="/"><img src={Logonb} alt='Logo Kasa n&b'/></Link><br></br>
    Adrien Abdalalim - Développeur Web & React</p>
    </div>
    
    </>)
  }
