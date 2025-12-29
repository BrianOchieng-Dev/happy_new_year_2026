

import  { useState } from "react";
import { registerUser } from "../firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import '../styles/auth.css';

//import Login from "./Login";
const Signup = () => {
     const navigate = useNavigate();
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[loading, setLoading] = useState(false)
    const[message, setMessage] = useState("")

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const userCredential = await registerUser(email, password);
      setMessage("Account created successfully!");
      console.log(userCredential); // shows user info in console
      setEmail("");
      setPassword("");
      
      setTimeout(() => {
      navigate('/login'); // replace with your login route
  }, 1000);
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false)  ;
    }
  };

  return (
    <section className="auth">
    <div className="auth-s-s">
      <div className="auth-s">
        <h2 >Sign Up</h2>
        {/* Email */}
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange = {(e) => setEmail(e.target.value)}
         
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange = {(e) => setPassword(e.target.value)}
         
        />

         {/* Message , the logic it, if something is true, show something , else ,,otherwise.*/}
        {message && (
          <p>{message}</p>
        )}


        {/* Button */}
        <button onClick={handleSignup} disabled={loading} className="link-a">
           {loading ? "Creating account..." : "Sign Up"} 
            {/* the login prevents multiple clicks, if loaading is true, account is being created, else the user needs to click
            to signup */}
        </button>
        <div >
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </div>
    </section>
  );
};


export default Signup;
