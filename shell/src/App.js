// src/App.js
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
const LoginComponent = React.lazy(() => import('componentA/Login'));
const DashboardRemote = React.lazy(() => import('componentB/Dashboard'));

const App = () => {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   const handler = (e) => navigate(e.detail);
  //   window.addEventListener('remote-navigate', handler);
  //   return () => window.removeEventListener('remote-navigate', handler);
  // }, []);

  return (

    <Suspense fallback={<div>Loading Login App...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/dashboard" element={<DashboardRemote />} />
        </Routes>
      </Router>
    </Suspense>

  );
};

export default App;
