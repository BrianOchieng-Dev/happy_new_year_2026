

import  { useState } from "react";
import { registerUser } from "../firebase/auth";
import { useNavigate, Link } from "react-router-dom";
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
    <div 
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f5f7fa"
      }}
    >
      <div 
        style={{
          width: "350px",
          padding: "30px",
          background: "white",
          borderRadius: "10px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Create Account
        </h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange = {(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange = {(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

         {/* Message , the logic it, if something is true, show something , else ,,otherwise.*/}
        {message && (
          <p style={{ 
            background: "#ffeaea", 
            padding: "10px", 
            borderRadius: "6px", 
            color: "#cc0000",
            marginBottom: "10px",
            textAlign: "center"
          }}>
            {message}
          </p>
        )}


        {/* Button */}
        <button style={buttonStyle}
        onClick={handleSignup}
        disabled={loading}>
           {loading ? "Creating account..." : "Sign Up"} 
            {/* the login prevents multiple clicks, if loaading is true, account is being created, else the user needs to click
            to signup */}
        </button>
        <div  style={{textAlign:"center",}}>
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  borderRadius: "6px",
  border: "1px solid #ddd"
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold"
};

export default Signup;
