import axios from "axios";
import React, {useState} from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const handleSubmit = async (e) => {
    try {
       e.preventDefault();
      await axios.post("/login", { email, password });
        alert("Log in Successfully");
    } catch (error) {
      alert("Log In Failed")
    }
   
  }

  return (
    <React.Fragment>
      <div className="mb-64 grow flex items-center justify-center flex-col">
        <h1 className="font-bold text-center mb-3 text-2xl">Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            id=""
            placeholder="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id=""
            placeholder="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <button className="login">Login</button>
          <div className="text-center py-2 text-gray-500">
            Don't have an account yet?{" "}
            <Link to={"/register"} className="text-black">
              Register Now!
            </Link>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default LoginPage;
