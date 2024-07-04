import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import ContactUs from './components/ContactUs';
import Layout from './components/Layout';
import Login from './pages/Login';
import RegisterTutor from './pages/RegisterTutor';
import InstructorDashboard from './pages/InstructorDashboard';
import TutorProvider from './context/TutorContext';
import StudentProvider from './context/StudentContext';
import StudentDashboard from './pages/StudentDashboard';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
    <TutorProvider>
       <StudentProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register-tutor" element={<RegisterTutor />} />
            <Route path="/instructor-dashboard" element={<InstructorDashboard />} />
            <Route path="/student-dashboard" element={<StudentDashboard />} />
          </Routes>
        </Layout>
      </Router>
      </StudentProvider>
    </TutorProvider>
    </AuthProvider>
  );
}

export default App;
