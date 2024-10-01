// src/js/components/Home.js
import React from "react";
import { Link } from "react-router-dom";
import './Home.css'; // Import the CSS file

const Home = () => {
  const username = "Deepak Bhatt"; // Replace with dynamic username if available
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="app-name">Fits</div>
        <div className="user-info">
          <span className="username">{username}</span>
          <Link to="/" className="home-button">Home</Link>
          <Link to="/logout" className="logout-button">Logout</Link>
        </div>
      </header>
      <div className="welcome-message">
        <h1>Welcome, {username}!</h1>
        <p>{currentDate}</p>
        <p>You're doing great, don't forget to log your daily stats.</p>
      </div>
      <div className="stats-container">
        <Link to="/calorie-tracker" className="stat-box">
          <div className="stat-icon">🔥</div>
          <div className="stat-count">Calories: 0</div>
        </Link>
        <Link to="/water-intake" className="stat-box">
          <div className="stat-icon">💧</div>
          <div className="stat-count">Water: 0</div>
        </Link>
        <Link to="/sleep-tracker" className="stat-box">
          <div className="stat-icon">🛌</div>
          <div className="stat-count">Sleep: 0</div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
