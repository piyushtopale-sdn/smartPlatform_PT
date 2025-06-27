import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Host from './Host';

const LoginComponent = React.lazy(() => import('componentA/Login'));
const RegisterComponent = React.lazy(() => import('componentA/Register'));
const AppRemote = React.lazy(() => import('componentB/App'));
const UserRemote = React.lazy(() => import('userComponentA/App'));

const App = () => {
  return (
    <Suspense fallback={<div>Loading Login App...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginComponent />} />
           <Route path="/register" element={<RegisterComponent />} />
          <Route path="/dashboard" element={<AppRemote />} />
          <Route path="/user" element={<UserRemote />} />
          <Route path="/host" element={<Host />} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;
