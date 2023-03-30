import React, { useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const HandleSubmit = (e) => {
        e.preventDefault();
        axios.get('/test')
    }
  return (
    <React.Fragment>
      <div className="mb-64 grow flex items-center justify-center flex-col">
        <h1 className="font-bold text-center mb-3 text-2xl">Register</h1>
        <form onSubmit={HandleSubmit}>
          <input
            type="text" 
            name="name"
            id="name"
            placeholder="John Doe"
            value={name.trim()}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login">Login</button>
          <div className="text-center py-2 text-gray-500">
            Already have an account?{" "}
            <Link to={"/login"} className="text-black">
              Login
            </Link>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default RegisterPage;
