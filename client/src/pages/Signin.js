import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { NavLink, useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const responseGoogle = async (response) => {
        console.log(response);
    
        const res = await fetch("http://localhost:5000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email:response.profileObj.email,
            password:response.profileObj.googleId,
          }),
        });
    
        const data = res.json();
        if (res.status === 400 || !data) {
          window.alert("Invalid credential");
        } else {
          window.alert("Login Successful!");
          navigate("/user");
        }
      };

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
 
    const data = res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid credential");
    } else {
      window.alert("Login Successful!");
      navigate("/user");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full">
        <h2 className="text-3xl font-bold mb-4 text-center">Sign In</h2>

        <div className="mb-4 mt-14">
          <input
            type="email" 
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
          />
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
          >
            Log In
          </button>
        </div>

        <div className="flex items-center mt-4 mb-4">
          <div className="w-full border-t border-gray-300"></div>
          <div className="mx-4 text-gray-500">Or</div>
          <div className="w-full border-t border-gray-300"></div>
        </div>

        <GoogleLogin
          clientId="269277454968-1mlg56agjse8p6k6aomovsl4l79lirhl.apps.googleusercontent.com"
          buttonText="Sign in with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 w-full mb-10"
        />

        <div className="text-center mb-4">
          <p>
            Don't have an account?{" "}
            <NavLink to={"/signup"} className="text-blue-500 hover:underline">
              Sign Up
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
