import React from 'react';
import HealthInputForm from './components/HealthInputForm';
import HealthDataDisplay from './components/HealthDataDisplay';

function App() {
  return (
    <div className="App">
      <h1>AI-Powered Health Tracker</h1>
      <HealthInputForm />
      <HealthDataDisplay />
    </div>
  );
}

export default App;
