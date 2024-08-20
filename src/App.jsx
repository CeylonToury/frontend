import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/signIn';
import Navbar from './components/layout/Navbar';

const App = () => {
  return (
    <div>
      
      <Routes>
        {/* <Route path="/" element={<DeliveredMothers />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/navbar" element={<Navbar />} />

      </Routes>
     
    </div>
  );
};

export default App;
