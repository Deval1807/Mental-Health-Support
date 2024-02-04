import React from 'react'

import Navbar1 from "../components/navbar1";
import Footer from "../components/footer"

const TherapistRequest = () => {
    const requests = [
        { id: 1, customerName: 'John Doe', age: 28, mentalHealthScale: 75 },
        { id: 2, customerName: 'Jane Smith', age: 35, mentalHealthScale: 85 },
        { id: 3, customerName: 'Bob Johnson', age: 42, mentalHealthScale: 60 },
        { id: 4, customerName: 'Bob Johnson', age: 42, mentalHealthScale: 60 },
        { id: 5, customerName: 'Bob Johnson', age: 42, mentalHealthScale: 60 },
      ];

  return (
    <>
    <Navbar1 />
    <div className=" bg-gray-100 mt-16 pb-3 p-4 min-h-96">      
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Requests</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {requests.map((request) => (
            <div key={request.id} className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-lg font-semibold mb-2">{request.customerName}</h3>
              <p className="text-gray-600 mb-2">{`Age: ${request.age}`}</p>
              <p className="text-gray-600 mb-2">{`Mental Health Scale: ${request.mentalHealthScale}%`}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                Checkout
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="h-3 bg-gray-100"></div>
    <Footer className="bottom-0"/>
    </>
  )
}

export default TherapistRequest
