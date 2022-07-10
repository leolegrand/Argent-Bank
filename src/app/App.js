import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useSelector } from 'react-redux'

import Homepage from '../Pages/Homepage/Homepage'
import SignIn from '../Pages/SignIn/SignIn'
import User from '../Pages/User/User'

import './App.css'

function App() {
  const isLogged = useSelector((state) => state.user.isLogged)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-in" element={isLogged ? <User /> : <SignIn />} />
        <Route path="/user" element={isLogged ? <User /> : <Homepage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
