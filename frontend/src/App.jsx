import React from 'react'
import { Route,Routes } from 'react-router'
import Login from './component/Login'
import Dashboard from './component/Dashboard'
import Register from './component/Register'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/dashboard" element={<Dashboard/>} />

      
    </Routes>
  ) 
}

export default App
