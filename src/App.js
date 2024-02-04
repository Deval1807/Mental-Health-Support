import { Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import UserHomePage from './pages/UserHome';
import TherapistHomePage from './pages/TherapistHome';
import JournalEntry from './pages/JournalEntry';
import TherapistDetail from './pages/TherapistDetail';
import Questionnaire from './pages/QuestionnaireBotPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/user' element={<UserHomePage />}></Route>
      <Route path='/therapist' element={<TherapistHomePage />}></Route>
      <Route path='/journal' element={<JournalEntry />}></Route>
      <Route path='/therapistDetail' element={<TherapistDetail />}></Route>
      <Route path='/Questionnaire' element={<Questionnaire />}></Route>
    </Routes>
  );
}

export default App;
