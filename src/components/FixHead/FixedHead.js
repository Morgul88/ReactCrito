import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const FixedHead = () => {

    const [position, setPosition] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setPosition(window.scrollY)
            console.log(position)

            return () => {
                
                window.removeEventListener('scroll',() => {});
              };
        })
    },[])

    const scrollToTop = () => {
        window.scrollTo({top:0, behavior:'smooth'})
    }
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
            <NavLink onClick={scrollToTop} to="/">Home</NavLink>
            <NavLink onClick={scrollToTop} to="/services">Service</NavLink>
            <NavLink onClick={scrollToTop} to="/News">News</NavLink>
            <NavLink onClick={scrollToTop} to="/Contacts">Contact</NavLink>       
        </nav>
    </div>
  )
}

export default FixedHead