// JournalEntry.js

import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Drawer from '../components/drawer';

const JournalEntry = () => {
  const [entry, setEntry] = useState('');

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
    <>
    {/* <Navbar /> */}
    <div className='mt-24'>
      <Drawer />
    </div>

    </>
  );
};

export default JournalEntry;
