
import React from 'react';
import Navbar from '../components/navbar';
import SimpleForm from '../components/chatbot';
import '../App.css';

const Questionnaire = () => {

    return (<>
        <Navbar />
        <div className="z-40" style={{ margin: '75px'}}>
            <SimpleForm />
        </div>
    </>
    );
};

export default Questionnaire;
