import React, { useState } from "react";

const AgeInputPage = () => {
  const [age, setAge] = useState("");

  const handleAgeInput = () => {
    // Handle age input logic
    console.log(`Age entered: ${age}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full">
        <h2 className="text-3xl font-bold mb-4 text-center">Welcome!</h2>
        <p className="text-gray-600 mb-4 text-center">
          Please tell us your age:
        </p>

        {/* Age Input */}
        <input
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
        />

        {/* Submit Button */}
        <button
          onClick={handleAgeInput}
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 w-full"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AgeInputPage;
