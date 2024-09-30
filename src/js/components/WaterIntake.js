// WaterIntake.js
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import './WaterIntake.css'; // Import the CSS file

const WaterIntake = () => {
  const username = "Deepak Bhatt"; // Replace with dynamic username if available
  const currentDate = new Date().toLocaleDateString();

  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Water Intake (L)',
        data: [2, 2.5, 3, 2, 2.8, 3.2, 2.5],
        fill: false,
        backgroundColor: '#0096FF',
        borderColor: '#0096FF',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  useEffect(() => {
    return () => {
      // Cleanup chart instances to avoid the "Canvas is already in use" error
      Object.values(Chart.instances).forEach(instance => instance.destroy());
    };
  }, []);

  return (
    <div className="water-container">
      <header className="water-header">
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
        
      </div>
      <div className="log-message">
        <p>Don't forget to log your daily water intake!</p>
        <button className="log-button">Log Water Intake</button>
      </div>
      <div className="chart-container">
      <p>Here's your water intake data for the week:</p>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default WaterIntake;