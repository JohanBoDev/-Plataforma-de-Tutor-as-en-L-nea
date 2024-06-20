import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div >
      <header className="bg-white mt-5">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">TutorLabs</h1>
          <nav className="flex gap-x-10">
            <Link to="/" className="">Home</Link>
            <Link to="/about" className="">About</Link>
            <Link to="/Login" className="">Login</Link>
            <Link to="/register" className="">Register</Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;
