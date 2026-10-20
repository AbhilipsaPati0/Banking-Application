import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/home/Home'
import Sevice from './pages/service/Sevice'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

import AdminDashboard from './pages/dashboard/AdminDashboard'
import EmployeeDashboard from './pages/dashboard/EmployeeDashboard'
import CustomerDashboard from './pages/dashboard/CustomerDashboard'

import ProtectedRoute from './guards/ProtectedRoute'

function App() {
  return (
    <Routes>

      {/* Public pages */}
      <Route path="/" element={<Home />} />
      <Route path="/service" element={<Sevice />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* Admin */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={["ADMIN"]}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      {/* Employee */}
      <Route
        path="/employee"
        element={
          <ProtectedRoute allowedRoles={["EMPLOYEE"]}>
            <EmployeeDashboard />
          </ProtectedRoute>
        }
      />

      {/* Customer */}
      <Route
        path="/customer"
        element={
          <ProtectedRoute allowedRoles={["CUSTOMER"]}>
            <CustomerDashboard />
          </ProtectedRoute>
        }
      />

    </Routes>
  )
}

export default App