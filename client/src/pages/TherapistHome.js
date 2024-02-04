import React from "react";

import Navbar1 from "../components/navbar1";
import Footer from "../components/footer"

const TherapistHome = () => {
  const appointments = [
    { id: 1, customerName: "John Doe", meetingTime: "2024-02-03 10:00 AM" },
    { id: 2, customerName: "Jane Smith", meetingTime: "2024-02-03 02:30 PM" },
    { id: 3, customerName: "Bob Johnson", meetingTime: "2024-02-04 11:15 AM" },
    { id: 4, customerName: "John Doe", meetingTime: "2024-02-03 10:00 AM" },
    { id: 5, customerName: "Jane Smith", meetingTime: "2024-02-03 02:30 PM" },
    { id: 6, customerName: "Bob Johnson", meetingTime: "2024-02-04 11:15 AM" },
    { id: 7, customerName: "John Doe", meetingTime: "2024-02-03 10:00 AM" },
    { id: 8, customerName: "Jane Smith", meetingTime: "2024-02-03 02:30 PM" },
    { id: 9, customerName: "Bob Johnson", meetingTime: "2024-02-04 11:15 AM" },
    { id: 10, customerName: "John Doe", meetingTime: "2024-02-03 10:00 AM" },
    { id: 11, customerName: "Jane Smith", meetingTime: "2024-02-03 02:30 PM" },
    { id: 12, customerName: "Bob Johnson", meetingTime: "2024-02-04 11:15 AM" },
  ];

  return (
    <>
      <Navbar1 />
      <div className="bg-gray-100 mt-16 pb-3 p-4 min-h-96">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Appointments</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="bg-white p-4 rounded-md shadow-md"
              >
                <h3 className="text-lg font-semibold mb-2">
                  {appointment.customerName}
                </h3>
                <p className="text-gray-600 mb-2">{`Meeting Time: ${appointment.meetingTime}`}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Join
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-3 bg-gray-100"></div>
      <Footer />
    </>
  );
};

export default TherapistHome;
