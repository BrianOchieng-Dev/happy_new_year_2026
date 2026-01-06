import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import { Route, Routes } from "react-router-dom"
export default function App(){
    return(
        <>
        <Routes>
            <Route path="/" element = {<Home/>}></Route>
            <Route path="/signup" element = {<Signup/>}></Route>
            <Route path = "/login" element = {<Login/>}></Route>
              <Route path = "/dashboard" element = {<Dashboard/>}></Route>
        </Routes>
        </>
    )
}