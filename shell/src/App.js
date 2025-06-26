// src/App.js
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const LoginComponent = React.lazy(() => import('componentA/Login'));
const AppRemote = React.lazy(() => import('componentB/App'));

const App = () => {
  return (

    <Suspense fallback={<div>Loading Login App...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/dashboard" element={<AppRemote />} />
        </Routes>
      </Router>
    </Suspense>

  );
};

export default App;
