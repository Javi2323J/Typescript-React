import logic from './logic'

import { Routes, Route, Navigate, useNavigate } from 'react-router'

import { Login } from './view'

export default function App() {
  return <>
    <Routes>
      <Route path="/" element={logic.isUserLoggedIn() ? <Navigate to="/" /> : <Navigate to="/login" />} />

      <Route path="/login" element={!logic.isUserLoggedIn() && <Login />} />
    </Routes>
  </>
}