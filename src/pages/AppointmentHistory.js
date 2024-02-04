import React from 'react'
import Navbar1 from '../components/navbar1';
import Footer from '../components/footer';

const ApptHistory = () => {

  const historyData = [
    {
      id: 1,
      customerName: 'John Doe',
      age: 28,
      mentalHealthScale: 75,
      datetime: '2024-01-15 03:30 PM',
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      age: 35,
      mentalHealthScale: 85,
      datetime: '2024-02-02 10:00 AM',
    },
    {
      id: 3,
      customerName: 'Bob Johnson',
      age: 42,
      mentalHealthScale: 60,
      datetime: '2024-02-10 01:45 PM',
    },
    {
      id: 4,
      customerName: 'Bob Johnson',
      age: 42,
      mentalHealthScale: 60,
      datetime: '2024-02-10 01:45 PM',
    },
  ];

  return (
    <>
    <Navbar1 />
    <div className="min-h-screen mt-16 bg-gray-100 p-4">

      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Appointment History</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {historyData.map((record) => (
            <div key={record.id} className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-lg font-semibold mb-2">{record.customerName}</h3>
              <p className="text-gray-600 mb-2">{`Age: ${record.age}`}</p>
              <p className="text-gray-600 mb-2">{`Mental Health Scale: ${record.mentalHealthScale}%`}</p>
              <p className="text-gray-600 mb-2">{`Datetime: ${record.datetime}`}</p>

              <div className="flex justify-between">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Details
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
                  Send Reminder
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
   </>
  )
}

export default ApptHistory