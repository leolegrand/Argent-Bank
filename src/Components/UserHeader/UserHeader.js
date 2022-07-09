import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './userheader.css'

const UserHeader = () => {
  const user = useSelector((state) => state.user)
  const userToken = localStorage.getItem('Token')

  const [toggle, setToggle] = useState(false)

  const handleEditButton = () => {
    setToggle(!toggle)
  }

  const [userInput, setUserInput] = useState({ firstName: '', lastName: '' })

  const inputHandle = (e) => {
    setUserInput(() => ({
      ...userInput,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
      body: JSON.stringify({
        firstName: userInput.firstName,
        lastName: userInput.lastName,
      }),
    })

    window.location.reload()
  }

  return (
    <div className="header">
      {!toggle ? (
        <>
          <h1>
            Welcome back
            <br />
            {user.firstName} {user.lastName} !
          </h1>
          <button className="edit-button" onClick={handleEditButton}>
            Edit Name
          </button>
        </>
      ) : (
        <>
          <h1>Welcome back</h1>
          <form className="form-edit" onSubmit={handleSubmit}>
            <div className="form__inputs">
              <input
                name="firstName"
                onChange={inputHandle}
                className="edit-input"
                type="text"
                placeholder={user.firstName}
                required
              />
              <input
                name="lastName"
                onChange={inputHandle}
                className="edit-input"
                type="text"
                placeholder={user.lastName}
                required
              />
            </div>
            <div className="form__buttons">
              <button className="edit-button" type="submit">
                Save
              </button>
              <button className="edit-button" onClick={handleEditButton}>
                Cancel
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  )
}

export default UserHeader
