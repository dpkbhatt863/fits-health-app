import React from 'react';
import { useSelector } from 'react-redux';

const HealthDataDisplay = () => {
  const healthData = useSelector((state) => state.healthData);

  return (
    <div>
      <h2>Your Health Data:</h2>
      <p>Water Intake: {healthData.waterIntake} liters</p>
      <p>Steps Walked: {healthData.stepsWalked}</p>
      <p>Sleep Hours: {healthData.sleepHours}</p>
      <p>Workout: {healthData.workout}</p>
    </div>
  );
};

export default HealthDataDisplay;
