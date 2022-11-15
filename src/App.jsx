import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Account from './pages/Account';

import { ToastContainer } from 'react-toastify';
import ProtectedRoutes from './components/ProtectedRoutes';

const App = () => {
  return (
    <>
      <ToastContainer />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route 
        path="/account"
         element={
          <ProtectedRoutes>
              <Account/>
          </ProtectedRoutes>} />
      </Routes>
      
    </>
  )
}

export default App