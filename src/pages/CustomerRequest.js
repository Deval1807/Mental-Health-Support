import React from 'react'
import Navbar1 from '../components/navbar1';
import Footer from '../components/footer';
// import { Line } from 'react-chartjs-2';
// import Chart from 'chart.js/auto'

const CustomerRequestPage = () => {

  const customerDetails = {
    name: 'John Doe',
    age: 28,
    mentalHealthScale: 75,
    gender: 'Male',
    email: 'john.doe@example.com',
    requestDate: '2024-02-03',
    requestTime: '10:00 AM',
    mentalHealthQuestions: [
      { question: 'How would you rate your stress level?', answer: '7' },
      { question: 'Are you experiencing any sleep disturbances?', answer: 'Yes' },
      { question: 'How would you rate your stress level?', answer: '7' },
      { question: 'Are you experiencing any sleep disturbances?', answer: 'Yes' },
      { question: 'How would you rate your stress level?', answer: '7' },
      { question: 'Are you experiencing any sleep disturbances?', answer: 'Yes' },
      { question: 'How would you rate your stress level?', answer: '7' },
      { question: 'Are you experiencing any sleep disturbances?', answer: 'Yes' },
      { question: 'How would you rate your stress level?', answer: '7' },
      { question: 'Are you experiencing any sleep disturbances?', answer: 'Yes' },
      { question: 'How would you rate your stress level?', answer: '7' },
      { question: 'Are you experiencing any sleep disturbances?', answer: 'Yes' },
    ],
    weeklyMentalHealthData: [60, 65, 70, 75, 80, 85, 90],
  };

  const chartData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
    datasets: [
      {
        label: 'Mental Health Score',
        data: customerDetails.weeklyMentalHealthData,
        fill: false,
        borderColor: 'blue',
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <>
    <Navbar1 />
    <div className="min-h-screen bg-gray-100 flex items-center justify-center mt-16">
      <div className="bg-white p-8 rounded-md shadow-md max-w-2xl w-full m-16">
        <h2 className="text-3xl font-bold mb-4">{customerDetails.name}</h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-gray-600 mb-2">{`Age: ${customerDetails.age}`}</p>
            <p className="text-gray-600 mb-2">{`Mental Health Scale: ${customerDetails.mentalHealthScale}%`}</p>
            <p className="text-gray-600 mb-2">{`Gender: ${customerDetails.gender}`}</p>
            <p className="text-gray-600 mb-2">{`Email: ${customerDetails.email}`}</p>
          </div>
          <div>
            <p className="text-gray-600 mb-2">{`Request Date: ${customerDetails.requestDate}`}</p>
            <p className="text-gray-600 mb-2">{`Request Time: ${customerDetails.requestTime}`}</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Mental Health Questions</h3>
          <ul className="list-disc list-inside">
            {customerDetails.mentalHealthQuestions.map((qa, index) => (
              <li key={index} className="text-gray-600">
                <strong>{qa.question}</strong>: {qa.answer}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Weekly Mental Health Chart</h3>
          {/* <Line data={chartData} options={chartOptions} /> */}
        </div>

        <div className="flex flex-col">
          <div className="mb-4">
            <label className="text-gray-600 mb-2 mx-12">Date and Time</label>
            <input type="datetime-local" className="p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="text-gray-600 mb-2 mx-14">Meeting Link</label>
            <input type="text" className="p-2 border rounded" />
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            Approve
          </button>
        </div>
      </div>
    </div>
    <Footer />
   </>
  )
}

export default CustomerRequestPage