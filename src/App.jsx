import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import OurFood from './pages/OurFood';
import Menu from './pages/Menu';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900 font-body selection:bg-accent selection:text-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-food" element={<OurFood />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
