import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useSelector } from 'react-redux'

import Homepage from '../Pages/Homepage/Homepage'
import SignIn from '../Pages/SignIn/SignIn'
import User from '../Pages/User/User'
import Error404 from '../Pages/Error404/Error404'

import './App.css'

function App() {
  const isLogged = useSelector((state) => state.user.isLogged)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={isLogged ? <User /> : <SignIn />} />
        <Route path="/profile" element={isLogged ? <User /> : <SignIn />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
