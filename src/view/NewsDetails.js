import React from 'react'

import Newsdetailbox from '../components/NewsdetailBox/Newsdetailbox'
import ArticleAndNews from '../components/ArticleAndNews/ArticleAndNews'

const NewsDetails = () => {
  return (
    <div className="wrapper">
        
        <main>
            <Newsdetailbox/>
            <ArticleAndNews/>
        </main>
        
    </div>
  )
}

export default NewsDetails