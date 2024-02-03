import { Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import UserHomePage from './pages/UserHome';
import JournalEntry from './pages/JournalEntry';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/user' element={<UserHomePage />}></Route>
      {/* <Route path='/therapis' element={<HomePage />}></Route> */}
      <Route path='/journal' element={<JournalEntry />}></Route>
    </Routes>
  );
}

export default App;
