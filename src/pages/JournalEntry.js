// JournalEntry.js

import React, { useState } from 'react';
import Navbar from '../components/navbar';
import SimpleForm from '../components/chatbot';
import ResponsiveDrawer from '../components/drawer';
import '../App.css';

const JournalEntry = () => {
  const [entry, setEntry] = useState('');

  let [showChat, setShowChat] = useState(false);

  const startChat = () => { setShowChat(true); }
  const hideChat = () => { setShowChat(false); }

  const handleEntryChange = (e) => {
    setEntry(e.target.value);
  };

  const getCurrentDate = () => {
    const currentDate = new Date();
    return currentDate.toDateString();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can handle the submission logic here, like storing the entry in a database.
    console.log('Entry:', entry);

    // Reset the form after submission
    setEntry('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 to-pink-500 mt-16 pt-6">
      <ResponsiveDrawer />
      <Navbar />
      <div className="mx-auto p-4 bg-white rounded-lg shadow-md max-w-md w-full">
        <div className="mb-4 text-gray-600 text-sm">{getCurrentDate()}</div>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Journal Entry</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            id="entry"
            className="border border-gray-300 p-2 mb-4 w-full h-48 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            value={entry}
            onChange={handleEntryChange}
            placeholder="Write your entry here..."
          />

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Save Entry
          </button>
        </form>
      </div>
      <div className = "bot">
        <div style ={{display: showChat ? "" : "none"}}>
          <SimpleForm></SimpleForm>
        </div>      
        {/* <div> {showChat ? <SimpleForm></SimpleForm> : null} </div> */}
        <div>
          {!showChat 
            ? <button className="btn" onClick={() => startChat()}>click to chat... </button> 
            : <button className="btn" onClick={() => hideChat()}>click to hide... </button>}
        </div>
      </div>      
    </div>
  );
};

export default JournalEntry;