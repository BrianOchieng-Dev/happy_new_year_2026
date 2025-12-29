import '../styles/home.css'
import {Link} from 'react-router-dom'
//import Nav from '../components/Navbar'
//import dev from '../assets/image.jpg'
export default function Home(){
    return(
        <>
        <section class="hero">
            <h1>Festive Season Greetings</h1>
            <h2>Midusa.Dev</h2>
           {/*<div className='image'>
                <img src={dev} alt="developer" className='dev'/>
            </div>*/} 
            <div className='link'>
                <Link to="/signup" className='link-a'>Sign Up</Link>
            </div>
        </section>
        </>
    )
}