import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { NavLink, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/age",{state:{name:name, password:password, email:email}})
  };

  const responseGoogle = (response) => {
    console.log(response.profileObj);
    navigate("/age",{state:{name:response.profileObj.name, password:response.profileObj.googleId, email:response.profileObj.email}})
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full">
        <h2 className="text-3xl font-bold mb-4 text-center">Sign Up</h2>

        {/* Name */}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
        />

        {/* Confirm Password */}
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
        />

        {/* SignUp Button */}
        <button
          onClick={handleSignUp}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full mb-4"
        >
          Sign Up
        </button>

        {/* Or Separator */}
        <div className="flex items-center mb-4">
          <div className="w-full border-t border-gray-300"></div>
          <div className="mx-4 text-gray-500">Or</div>
          <div className="w-full border-t border-gray-300"></div>
        </div>

        {/* Google Sign Up Button */}
        <GoogleLogin
          clientId="YOUR_GOOGLE_CLIENT_ID"
          buttonText="Sign up with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-700 w-full"
        />
        <div className="text-center my-4">
          <p>
            Already have an account?{" "}
            <NavLink to={"/Signin"} className="text-blue-500 hover:underline">
              Sign Up
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
