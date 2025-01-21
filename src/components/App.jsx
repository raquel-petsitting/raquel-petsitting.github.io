import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Home from './pages/Home';
import Simulator from './pages/Simulator';

function App() {
  return (
    <Router>
      <div className="app-container w-screen h-screen flex flex-col justify-between">
        <div className="flex h-full">
          <Navbar />
          <div className="main-content">
            <Routes>
              <Route path="/*" element={<Home />} />
              <Route path="/simulator" element={<Simulator />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
