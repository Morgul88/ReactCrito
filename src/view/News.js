import React from 'react'

import Subscribe from '../components/Subscribe/Subscribe'
import Newsbox from '../components/NewsContent/Newsbox'

const News = () => {
  return (
    <div className="wrapper">
        
        <main>
            <Newsbox/>
            <Subscribe/>
        </main>
        
    </div>
  )
}

export default News