import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="welcome-message">
        <h1>Welcome to DreamScapeAI</h1>
        <p>
          Your personal dream interpreter. Gain insight into your dreams using
          our AI model trained on dream interpretation resources. Create an
          account to get started.
        </p>
        <Link to="/register" className="sign-in-link">
          Sign In
        </Link>
        <div className="loading-animation">
          <div className="spinner"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
