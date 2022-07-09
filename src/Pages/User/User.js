import React from 'react'
import Account from '../../Components/Account/Account'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import UserHeader from '../../Components/UserHeader/UserHeader'
import { useDispatch } from 'react-redux'
import { userProfile } from '../../features/user/userSlice'

const User = () => {
  const dispatch = useDispatch()

  const userToken = localStorage.getItem('Token')

  if (userToken) {
    fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
    })
      .then((res) => res.json())
      .then((res) => dispatch(userProfile(res.body)))

    const a = {
      title: 'Argent Bank Checking (x8349)',
      description: 'Available Balance',
      amount: '$2,082.79',
    }

    const b = {
      title: 'Argent Bank Savings (x6712)',
      description: 'Available Balance',
      amount: '$10,928.42',
    }

    const c = {
      title: 'Argent Bank Credit Card (x8349)',
      description: 'Current Balance',
      amount: '$184.30',
    }

    return (
      <>
        <Header />
        <main className="main bg-dark">
          <UserHeader />
          <h2 className="sr-only">Accounts</h2>
          <Account
            title={a.title}
            description={a.description}
            amount={a.amount}
          />
          <Account
            title={b.title}
            description={b.description}
            amount={b.amount}
          />
          <Account
            title={c.title}
            description={c.description}
            amount={c.amount}
          />
        </main>
        <Footer />
      </>
    )
  } else {
    return (
      <div>vous n'avez pas accès à cette page, veuillez vous connecter.</div>
    )
    // Mettre en place un système de redirection automatisée
  }
}

export default User
