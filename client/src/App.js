import { Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import UserHomePage from './pages/UserHome';
import TherapistHomePage from './pages/TherapistHome';
import JournalEntry from './pages/JournalEntry';
import TherapistDetail from './pages/TherapistDetail';
import TherapistRequest from './pages/TherapistRequest';
import CustomerRequestPage from './pages/CustomerRequest';
import Questionnaire from './pages/QuestionnaireBotPage';
import ApptHistory from './pages/AppointmentHistory';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import AgeInputPage from './pages/AgeInputPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/user' element={<UserHomePage />}></Route>
      <Route path='/therapist' element={<TherapistHomePage />}></Route>
      <Route path='/journal' element={<JournalEntry />}></Route>
      <Route path='/therapistDetail' element={<TherapistDetail />}></Route>
      <Route path='/therapistRequest' element={<TherapistRequest />}></Route>
      <Route path='/customerRequest' element={<CustomerRequestPage />}></Route>
      <Route path='/appointmenHistory' element={<ApptHistory />}></Route>
      <Route path='/Questionnaire' element={<Questionnaire />}></Route>
      <Route path='/signin' element={<Signin />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/age' element={<AgeInputPage />}></Route>
    </Routes>
  );
}

export default App;
