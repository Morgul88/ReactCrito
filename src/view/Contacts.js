import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import LetsContact from '../components/LetsContact/LetsContact'
import Leavemessage from '../components/LeaveMessage/Leavemessage'
import LeaveMessageCard from '../components/LeaveMessageCard/LeaveMessageCard'
import Map from '../components/Map/Map'

const Contact = () => {
  return (
    <div className="wrapper">
        <Header />
        <main>
          <LetsContact/>
          <Leavemessage/>
          <LeaveMessageCard/>
          <Map/>
        </main>
        <Footer />
    </div>
  )
}

export default Contact