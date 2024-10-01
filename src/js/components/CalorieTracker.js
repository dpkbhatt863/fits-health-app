import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import './CalorieTracker.css'; // Import the CSS file

const CalorieTracker = () => {
  const username = "Deepak Bhatt"; // Replace with dynamic username if available
  const currentDate = new Date().toLocaleDateString();

  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Calories',
        data: [2000, 2200, 2100, 2300, 2400, 2500, 2600],
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

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [maintenanceCalories, setMaintenanceCalories] = useState(null);

  const calculateMaintenanceCalories = () => {
    let bmr;
    if (gender === 'male') {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    const activityMultiplier = {
      sedentary: 1.2,
      lightly_active: 1.375,
      moderately_active: 1.55,
      very_active: 1.725,
      extra_active: 1.9,
    };

    setMaintenanceCalories(bmr * activityMultiplier[activityLevel]);
  };

  useEffect(() => {
    return () => {
      // Cleanup chart instances to avoid the "Canvas is already in use" error
      Object.values(Chart.instances).forEach(instance => instance.destroy());
    };
  }, []);

  return (
    <div className="calorie-container">
      <header className="calorie-header">
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
        <p>Don't forget to log your daily calories!</p>
        <button className="log-button">Log Calories</button>
      </div>
      <div className="chart-container">
      <p>Here's your calorie data for the week:</p>
        <Line data={data} options={options} />
      </div>
      <div className="maintenance-calories">
        <h2>What's your maintenance calories?</h2>
        <p>Enter your details below to calculate your maintenance calories:</p>
        <div className="input-group">
          <label>Weight (kg):</label>
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Height (cm):</label>
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Age:</label>
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Gender:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="input-group">
          <label>Activity Level:</label>
          <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
            <option value="sedentary">Sedentary (little or no exercise)</option>
            <option value="lightly_active">Lightly active (light exercise/sports 1-3 days/week)</option>
            <option value="moderately_active">Moderately active (moderate exercise/sports 3-5 days/week)</option>
            <option value="very_active">Very active (hard exercise/sports 6-7 days a week)</option>
            <option value="extra_active">Extra active (very hard exercise/sports & physical job)</option>
          </select>
        </div>
        <button className="calculate-button" onClick={calculateMaintenanceCalories}>Calculate</button>
        {maintenanceCalories && (
          <div className="result">
            <h3>Your maintenance calories: {Math.round(maintenanceCalories)} kcal/day</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalorieTracker;