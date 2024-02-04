
import React from 'react';
import Navbar from '../components/navbar';
import SimpleForm from '../components/chatbot';
import '../App.css';

const Questionnaire = () => {

    return (<>
        <Navbar />
        <div className="z-40 mt-32 mx-10 ">
            <SimpleForm />
        </div>
    </>
    );
};

export default Questionnaire;
