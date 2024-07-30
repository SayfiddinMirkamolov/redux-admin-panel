import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';

const App = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {isAuthenticated && (
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="students" element={<Students />} />
        </Route>
      )}
    </Routes>
  );
};

export default App;
