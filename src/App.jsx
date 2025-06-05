import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'

import Home from './pages/Home'
import CaptainRegister from './pages/CaptainRegister'
import CaptainLogin from './pages/CaptainLogin'
import UserRegister from './pages/UserRegister'
import UserLogin from './pages/UserLogin'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-register" element={<UserRegister />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-register" element={<CaptainRegister />} />
      </Routes>
    </>
  )
}

export default App
