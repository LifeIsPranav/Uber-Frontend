import { Route, Routes } from 'react-router-dom'

import './App.css'

import Layout from './features/global/components/layout'
import CaptainRegister from './pages/CaptainRegister'
import CaptainLogin from './pages/CaptainLogin'
import UserRegister from './pages/UserRegister'
import UserLogin from './pages/UserLogin'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-register" element={<UserRegister />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-register" element={<CaptainRegister />} />
      </Route>
      </Routes>
    </>
  )
}

export default App
