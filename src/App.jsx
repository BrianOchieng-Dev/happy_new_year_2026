import Home from "./pages/Home"
import Signup from "./pages/Signup"
import { Route, Routes } from "react-router-dom"
export default function App(){
    return(
        <>
        <Routes>
            <Route path="/" element = {<Home/>}></Route>
            <Route path="/signup" element = {<Signup/>}></Route>
        </Routes>
        </>
    )
}