import React from 'react'
import { NavLink } from 'react-router-dom'
import ArgentBankLogo from './argentBankLogo.png'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { userReset } from '../../features/user/userSlice'
import { logout } from '../../features/login/loginSlice'

import './header.css'

const Header = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  if (localStorage.getItem('Token')) {
    const signOut = () => {
      localStorage.removeItem('Token')
      dispatch(logout())
      dispatch(userReset())
    }

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
