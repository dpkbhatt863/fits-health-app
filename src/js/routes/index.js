// src/js/routes/index.js
import Home from "../components/Home";
import WaterIntake from "../components/WaterIntake";
import StepsTracker from "../components/StepsTracker";
import SleepTracker from "../components/SleepTracker";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/water-intake",
    component: WaterIntake,
  },
  {
    path: "/steps-tracker",
    component: StepsTracker,
  },
  {
    path: "/sleep-tracker",
    component: SleepTracker,
  },
];

export default routes;
