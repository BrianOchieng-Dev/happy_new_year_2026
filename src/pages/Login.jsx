




import React, { useState } from "react";
import { loginUser } from "../firebase/auth"; // your auth functions
import { useNavigate, Link } from "react-router-dom";
import '../styles/auth.css';
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
    <section className="auth">
    <div className="auth-s-s">
    <div className="auth-s">
      {/* CARD */}
     
        <h2 >Login</h2>

        {/* Error message */}
        {message && (
          <p >
            {message}
          </p>
        )}
      
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            onClick={handleLogin}
            className="link-a"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          <div >
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
          </div>
     
    </div>
    </div>
    </section>
  );
};

export default Login;
