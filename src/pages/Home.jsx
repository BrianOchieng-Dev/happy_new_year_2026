import '../styles/home.css'
import dev from '../assets/image.jpg'
export default function Home(){
    return(
        <>
        <section class="hero">
            <h1>Festive Season Greetings</h1>
            <h2>Midusa.Dev</h2>
            <div className='image'>
                <img src={dev} alt="developer" className='dev'/>
            </div>
        </section>
        </>
    )
}