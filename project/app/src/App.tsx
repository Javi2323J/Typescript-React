import logic from './logic'

import { Routes, Route, Navigate, useNavigate } from 'react-router'

import { Login, Register } from './view'

export default function App() {
  const navigate = useNavigate()

  const handleRegisterClick = () => navigate('/register')
  const handleLoginClick = () => navigate('/login')

  return <>
    <Routes>
      <Route path="/" element={logic.isUserLoggedIn() ? <Navigate to="/" /> : <Navigate to="/login" />} />

      <Route path="/login" element={!logic.isUserLoggedIn() && <Login onRegisterClick={handleRegisterClick} />} />

      <Route path="/register" element={!logic.isUserLoggedIn() && <Register onLoginClick={handleLoginClick} />} />
    </Routes>
  </>
}