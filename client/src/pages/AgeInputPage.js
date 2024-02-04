import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AgeInputPage = () => {
  const [age, setAge] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handleAgeInput = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name:location.state.name,
        email:location.state.email,
        password:location.state.password,
        age:age,
      }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Registration Failed!");
      console.log("Registration Failed!");
    } else {
      window.alert("Registration successful!");
      console.log("Registration successful!");
      navigate("/signin");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full">
        <h2 className="text-3xl font-bold mb-4 text-center">Welcome</h2>
        <p className="text-gray-600 mb-4 text-center">Please tell us your age:</p>

        {/* Age Input */}
        <input
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
        />

        {/* Submit Button */}
        <button onClick={handleAgeInput} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
          Submit
        </button>
      </div>
    </div>
  );
};

export default AgeInputPage;
