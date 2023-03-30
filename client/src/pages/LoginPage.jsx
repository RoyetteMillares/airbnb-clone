import React from "react";

const LoginPage = () => {
  return (
    <React.Fragment>
      <div className="mt-4">
        <h1 className="font-bold text-center">Login</h1>
        <form action="">
          <input type="text" name="email" id="" placeholder="email" />
          <input type="password" name="password" id="" placeholder="password" />
        </form>
      </div>
    </React.Fragment>
  );
};

export default LoginPage;
