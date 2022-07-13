import React from 'react'
import { useState } from 'react'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { userAuthentification, userLogin } from '../../features/user/userSlice'

import './signinform.css'

const SignInForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [user, setUser] = useState({ email: '', password: '' })

  const inputHandle = (e) => {
    setUser(() => ({
      ...user,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Uses user input to make a request to the API
    const res = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
    const data = await res.json()

    if (data.status === 200) {
      // Saves the user token in the store
      dispatch(userAuthentification(data))
      // Uses the token returned by the API to retrieve user information
      fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${data.body.token}`,
        },
      })
        .then((res) => res.json())
        // Saves the user data in the store
        .then((res) => dispatch(userLogin(res.body)))
      navigate('/profile')
    } else {
      alert(data.message)
    }
  }

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="email"
            onChange={inputHandle}
            autoComplete="on"
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            autoComplete="on"
            onChange={inputHandle}
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button">Sign In</button>
      </form>
    </section>
  )
}

export default SignInForm
