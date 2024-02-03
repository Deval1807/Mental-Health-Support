// JournalEntry.js

import React, { useState } from 'react';

import Navbar from '../components/navbar';

const JournalEntry = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can handle the submission logic here, like storing the entry in a database.
    console.log('Title:', title);
    console.log('Content:', content);

    // Reset the form after submission
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <Navbar />
      <h2 className="text-2xl font-bold mb-4">Journal Entry</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
          Title:
        </label>
        <input
          type="text"
          id="title"
          className="border border-gray-300 p-2 mb-4 w-full"
          value={title}
          onChange={handleTitleChange}
        />

        <label htmlFor="content" className="block text-gray-700 font-bold mb-2">
          Content:
        </label>
        <textarea
          id="content"
          className="border border-gray-300 p-2 mb-4 w-full"
          value={content}
          onChange={handleContentChange}
        />

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Save Entry
        </button>
      </form>
    </div>
  );
};

export default JournalEntry;
