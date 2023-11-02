import React from 'react'
import Showcase from '../components/Showcase/Showcase'
import OurServices from '../components/Services/OurServices'

import Logo from '../components/Logo/Logo'
import Features from '../components/Features/Features'
import AboutCompany from '../components/AboutCompany/AboutCompany'
import ProjectAndCase from '../components/ProjectAndCase/ProjectAndCase'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'
import MeetOurTeam from '../components/MeetOurTeam/MeetOurTeam'
import Testimontial from '../components/Testimonial/Testimontial'
import ArticleAndNews from '../components/ArticleAndNews/ArticleAndNews'
import Subscribe from '../components/Subscribe/Subscribe'

const Home = () => {
  return (
    <div className="wrapper">
        
        <main>
            <Showcase/>
            <Logo/>
            <Features/>
            <AboutCompany/>
            <OurServices/>
            <WhyChooseUs/>
            <ProjectAndCase/>
            <MeetOurTeam/>
            <Testimontial/>
            <ArticleAndNews/>
            <Subscribe/>
        </main>
        
    </div>
    
  )
}

export default Home