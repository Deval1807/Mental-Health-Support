import React, { useState } from 'react';
import Navbar from '../components/navbar';
import SimpleForm from '../components/chatbot';
import '../App.css';

const Questionnaire = () => {

    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-400 to-pink-500 mt-16 pt-6">
            <Navbar />
            <SimpleForm></SimpleForm>
        </div>
    );
};

export default Questionnaire;
