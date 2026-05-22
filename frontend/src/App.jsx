import React from 'react'
import { Route,Routes } from 'react-router'
import Login from './pages/Login'
import Dashboard from './component/Dashboard'
import Register from './pages/Register'
import VerifyEmail from './pages/VerifyEmail'
import ForgetPassword from './pages/ForgetPassword'
import HomePage from './pages/HomePage'
import ProtectedRoute from './utils/ProtectedRoute'
import "./index.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path ="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/verify-email" element={<VerifyEmail/>} />
      <Route path="/forgot-password" element={<ForgetPassword/>} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

      
    </Routes>
  ) 
}

export default App
