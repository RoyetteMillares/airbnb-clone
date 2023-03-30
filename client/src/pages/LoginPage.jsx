import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <React.Fragment>
      <div className="mb-64 grow flex items-center justify-center flex-col">
        <h1 className="font-bold text-center mb-3 text-2xl">Login</h1>
        <form action="">
          <input type="text" name="email" id="" placeholder="email" />
          <input type="password" name="password" id="" placeholder="password" />
          <button className="login">Login</button>
          <div className="text-center py-2 text-gray-500">
            Don't have an account yet? <Link to={"/register"} className="text-black">Register Now!</Link>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default LoginPage;
