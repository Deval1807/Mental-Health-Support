import React from "react";
import Footer from "../components/footer";

const HomePage = () => {
  const founders = [
    {
      id: 1,
      name: "Founder 1",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqPq4-8zLfy1e3_Y4GECe-U3MIkvx1AsGNgQ&usqp=CAU",
    },
    {
      id: 2,
      name: "Founder 2",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqPq4-8zLfy1e3_Y4GECe-U3MIkvx1AsGNgQ&usqp=CAU",
    },
    {
      id: 3,
      name: "Founder 3",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqPq4-8zLfy1e3_Y4GECe-U3MIkvx1AsGNgQ&usqp=CAU",
    },
    {
      id: 4,
      name: "Founder 4",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqPq4-8zLfy1e3_Y4GECe-U3MIkvx1AsGNgQ&usqp=CAU",
    },
  ];

  return (
    <>
      <div className="relative h-screen">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1IuH-o1ZFvH2J4FF-wfwFpz17DW4Gq5azcw&usqp=CAU"
          alt="Your Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 right-20 transform -translate-y-1/2 w-96 h-80 bg-gray-800 rounded text-white flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold">WellNest</h1>
          <h3 className="text-lg m-8 text-center">
            Get started today with WellNest. And Get you Mental back to normal
          </h3>

          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
            Get Started
          </button>
        </div>
      </div>
      <div className="bg-gray-100 py-24">
        <div className="container">
          <h1 className="text-3xl font-bold mb-4 py-4 flex justify-center">
            Meet Our Founders
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {founders.map((founder) => (
              <div key={founder.id} className="text-center">
                <img
                  src={founder.photo}
                  alt={`Founder ${founder.id}`}
                  className="w-32 h-32 object-cover mx-auto rounded-full mb-2"
                />
                <p className="font-semibold">{founder.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
