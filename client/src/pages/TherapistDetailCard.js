import React from "react";

const TherapistDetailCard = () => {
  const therapistDetails = {
    name: "Dr. Sarah Thompson",
    age: 35,
    qualification: "Ph.D. in Psychology",
    gender: "Female",
    email: "sarah.thompson@example.com",
    profilePhoto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8kiSH5ZSAcVoj3tAQQDoP_ux0sSricMyUg&usqp=CAU",
    charges: "$100 per session",
    numberOfCustomers: 50,
    consultantMedium: ["Online", "Offline"], // Replace with 'Online', 'Offline', or 'Both'
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-md shadow-md max-w-4xl w-full">
          <img
            src={therapistDetails.profilePhoto}
            alt="Therapist Profile"
            className="w-20 h-20 object-cover rounded-full mb-4 mx-auto"
          />

          <h2 className="text-2xl font-bold mb-4 text-center">
            {therapistDetails.name}
          </h2>
          <div className="grid grid-cols-2 gap-10 text-gray-600">
            <div>
              <p className=" mb-3">{`Age: ${therapistDetails.age}`}</p>
              <p className=" mb-3">{`Qualification: ${therapistDetails.qualification}`}</p>
              <p className=" mb-3">{`Gender: ${therapistDetails.gender}`}</p>
              <p className=" mb-3">{`Email: ${therapistDetails.email}`}</p>
            </div>
            <div>
              <p className=" mb-3">{`Charges: ${therapistDetails.charges}`}</p>
              <p className=" mb-3">{`Customers Attained: ${therapistDetails.numberOfCustomers}`}</p>
              <p className=" mb-3">{`Consultant Medium: ${therapistDetails.consultantMedium.join(
                "/"
              )}`}</p>
            </div>
          </div>

          <div className="mt-4 text-center">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Edit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TherapistDetailCard;
