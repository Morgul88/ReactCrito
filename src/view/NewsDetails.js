import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Newsdetailbox from '../components/NewsdetailBox/Newsdetailbox'
import ArticleAndNews from '../components/ArticleAndNews/ArticleAndNews'

const NewsDetails = () => {
  return (
    <div className="wrapper">
        <Header />
        <main>
            <Newsdetailbox/>
            <ArticleAndNews/>
        </main>
        <Footer />
    </div>
  )
}

export default NewsDetails