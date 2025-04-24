import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Timer from "./components/Timer";
import Stopwatch from "./components/Stopwatch";
import MusicPlayer from "./components/MusicPlayer";
import GpsTracker from "./components/GpsTracker";
import GoalTracker from "./components/GoalTracker";

export default function App() {
  return (
    <Router>
      <div style={{ padding: '1rem', fontFamily: 'Arial' }}>
        <nav style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <Link to="/">Timer</Link>
          <Link to="/stopwatch">Stopwatch</Link>
          <Link to="/music">Music</Link>
          <Link to="/tracker">Tracker</Link>
          <Link to="/goals">Goals</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Timer />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/music" element={<MusicPlayer />} />
          <Route path="/tracker" element={<GpsTracker />} />
          <Route path="/goals" element={<GoalTracker />} />
        </Routes>
      </div>
    </Router>
  );
}