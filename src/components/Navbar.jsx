
import {Link} from "react-router-dom"
export default function Nav(){
    return(
        <>
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                  <Link to="/dashboard">Dashboard</Link>
            </nav>
        </header>
        </>
    )
}