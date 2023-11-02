import React from 'react'

import LetsContact from '../components/LetsContact/LetsContact'
import Leavemessage from '../components/LeaveMessage/Leavemessage'
import LeaveMessageCard from '../components/LeaveMessageCard/LeaveMessageCard'
import Map from '../components/Map/Map'

const Contact = () => {
  return (
    <div className="wrapper">
        
        <main>
          <LetsContact/>
          <Leavemessage/>
          <LeaveMessageCard/>
          <Map/>
        </main>
        
    </div>
  )
}

export default Contact