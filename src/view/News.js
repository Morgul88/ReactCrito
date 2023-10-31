import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Subscribe from '../components/Subscribe/Subscribe'
import Newsbox from '../components/NewsContent/Newsbox'

const News = () => {
  return (
    <div className="wrapper">
        <Header />
        <main>
            <Newsbox/>
            <Subscribe/>
        </main>
        <Footer />
    </div>
  )
}

export default News