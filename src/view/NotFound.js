import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

const NotFound = () => {
  return (
    <div className="wrapper">
        <Header/>
        <main>
            <h1>404 Page not found</h1>
        </main>
        <Footer />
    </div>
  )
}

export default NotFound