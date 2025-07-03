import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="component-b">
        <h1>📊 Component B</h1>
        <p>This section displays recent analytics and activity summaries relevant to your application.</p>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>New Users</h3>
            <p>1,254</p>
          </div>
          <div className="stat-card">
            <h3>Active Sessions</h3>
            <p>342</p>
          </div>
          <div className="stat-card">
            <h3>Sales Today</h3>
            <p>$5,290</p>
          </div>
        </div>
        <Link to="/" className="login-link">
          Login
        </Link>
      </div>
    </Router>
  );
}

export default App;
