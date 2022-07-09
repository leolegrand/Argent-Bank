import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import SignInForm from '../../Components/SignInForm/SignInForm'

const SignIn = () => {
  // ajouter une vérification et/ou redirection si l'utilisateur est déjà connecté
  return (
    <>
      <Header />
      <main className="main bg-dark">
        <SignInForm />
      </main>
      <Footer />
    </>
  )
}

export default SignIn
