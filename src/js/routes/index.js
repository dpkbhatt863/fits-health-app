// src/js/routes/index.js
import Home from "../components/Home";
import CalorieTracker from "../components/CalorieTracker";
import SleepTracker from "../components/SleepTracker";
import WaterIntake from "../components/WaterIntake";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/calorie-tracker",
    component: CalorieTracker
  },
  {
    path: "/sleep-tracker",
    component: SleepTracker
  },
  {
    path: "/water-intake",
    component: WaterIntake
  }
];

export default routes;
