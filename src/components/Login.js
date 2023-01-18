import React from "react";
const Login = () => {
  return (
    <div className="LoginContainer wrapper ">
      <div className="LoginCenter">
        <h3 className="title">Sign in to your account</h3>
        <input type="text" placeholder="Email/Phone Number" />
        <input type="text" placeholder="Password" />
        <button>Login</button>
      </div>
    </div>
  );
};

export default Login;
