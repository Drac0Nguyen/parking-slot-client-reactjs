// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'; 
import Login from './component/login/login';
import Home from './component/home/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

function PrivateRoute() {
  // const isAuthenticated = !!localStorage.getItem('token');
  const isAuthenticated = false;
  return isAuthenticated ? <Home /> : <Navigate to="/login" replace />;
}

export default App;
