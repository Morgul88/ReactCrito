import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const FixedHead = () => {

    const [position, setPosition] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setPosition(window.scrollY)
            console.log(position)
        })
    },[])

    // const scrollToTop = () => {
    //     window.scrollTo({top:0, behavior:'smooth'})
    // }
    const changeClass = () => {
        if (position < 100) {
            console.log('Här så väljs klassen fixed-header')
          return 'hidden';
          
        } else {
            console.log('Här så väljs klassen hidden')
          return 'fixed-header';
          
        }
      };
    
  return (
    <div className={changeClass()}>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Service</NavLink>
            <NavLink to="/News">News</NavLink>
            <NavLink to="/Contacts">Contact</NavLink>       
        </nav>
    </div>
  )
}

export default FixedHead