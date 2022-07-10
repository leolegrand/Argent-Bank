import React from 'react'

import { NavLink } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { userLogout } from '../../features/user/userSlice'

import ArgentBankLogo from './argentBankLogo.png'

import './header.css'

const Header = ({ user }) => {
  const dispatch = useDispatch()

  const signOut = () => {
    dispatch(userLogout())
  }

  if (user) {
    return (
      <nav className="main-nav">
        <NavLink to={'/'} className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={ArgentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>

        <div>
          <NavLink className="main-nav-item" to={'/user'}>
            <i className="fa fa-user-circle"></i>
            {user.firstName}
          </NavLink>
          <NavLink className="main-nav-item" to={'/sign-in'} onClick={signOut}>
            <i className="fa fa-user-circle"></i>
            Sign Out
          </NavLink>
        </div>
      </nav>
    )
  } else {
    return (
      <nav className="main-nav">
        <NavLink to={'/'} className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={ArgentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
          <NavLink className="main-nav-item" to={'/sign-in'}>
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        </div>
      </nav>
    )
  }
}

export default Header
