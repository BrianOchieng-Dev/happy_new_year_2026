




import React, { useState } from "react";
import { loginUser } from "../firebase/auth"; // your auth functions
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // popup message state
  //const [popup, setPopup] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(""); // clear previous errors

    try {
      const userCredential = await loginUser(email, password);

      // SUCCESS POPUP
      console.log(userCredential); // shows user info in console
     // setPopup("Welcome back!");
     // setTimeout(() => setPopup(""), 5000);

      // redirect after 1s delay
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);

    } catch (error) {
      setMessage(error.message);
    }

    setLoading(false);
  };

  return (
    <div style={{display: "flex",
      height: "100vh",
          justifyContent: "center",
          alignItems: "center",}}>
    <div style={{
          width: "350px",
          padding: "30px",
          background: "white",
          borderRadius: "10px",
          
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
        }}>

     
      {/* CARD */}
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>

        {/* Error message */}
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

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
               style={inputStyle}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              style={inputStyle}
              className="w-full p-3 border rounded-md focus:ring focus:ring-blue-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            style={buttonStyle}
            className={`w-full p-3 rounded-md text-white font-medium transition 
              ${loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"}
            `}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          <div style={{textAlign:"center", marginTop:"10px"}}>
            <p>Don't have an account? <Link to="/">Sign Up</Link></p>
          </div>
        </form>
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



export default Login;
