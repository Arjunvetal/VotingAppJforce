import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Registration from './pages/userRegister';
import Login from './pages/userLogin';
import VotingPage from './pages/VotingPage';

import Navbar from './pages/Navbar';
import AdminLogin from './pages/admin';
import CandidateList from './pages/candidateList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
         
         <Route path="/" element={<Navbar/>} />
         <Route path="/userRegister" element={<Registration />} />
         <Route path="/userLogin" element={<Login/>} />
         <Route path="/VotingPage" element={<VotingPage />} />
         <Route path="/adminLogin" element={<AdminLogin />} />
         <Route path="/CandidateList" element={<CandidateList />} />
        
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
