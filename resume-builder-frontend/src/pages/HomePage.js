//HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to the Resume Builder</h1>
      <Link to="/templates" className="start-button">Start Building Your Resume</Link>
    </div>
  );
};

export default HomePage;
