import React, { useState } from "react";
import { useDispatch } from 'react-redux';

const HealthInputForm = ({ onSubmit }) => {
  const [waterIntake, setWaterIntake] = useState("");
  const [stepsWalked, setStepsWalked] = useState("");
  const [sleepHours, setSleepHours] = useState("");
  const [workoutHours, setWorkoutHours] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'UPDATE_HEALTH_DATA',
      payload: {
        waterIntake,
        stepsWalked,
        sleepHours,
        workout
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Water Intake (Liters):</label>
        <input
          type="number"
          value={waterIntake}
          onChange={(e) => setWaterIntake(e.target.value)}
        />
      </div>
      <div>
        <label>Steps Walked:</label>
        <input
          type="number"
          value={stepsWalked}
          onChange={(e) => setStepsWalked(e.target.value)}
        />
      </div>
      <div>
        <label>Sleep Hours:</label>
        <input
          type="number"
          value={sleepHours}
          onChange={(e) => setSleepHours(e.target.value)}
        />
      </div>
      <div>
        <label>Workout Hours:</label>
        <input
          type="number"
          value={workoutHours}
          onChange={(e) => setWorkoutHours(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default HealthInputForm;
