// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import ContactUs from './components/ContactUs';
import Layout from './components/Layout';
import Login from './components/Login';
import RegisterPage from './pages/RegisterPage';
import RegisterStudent from './components/RegisterStudent';
import RegisterTutor from './components/RegisterTutor';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/register-student" element={<RegisterStudent />} />
          <Route path="/register-tutor" element={<RegisterTutor />} />

        </Routes>
        
      </Layout>
      <Footer />
    </Router>
  );
}

export default App;
