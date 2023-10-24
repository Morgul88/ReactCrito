
import React from 'react'
import img_logo from '../../assets/images/Logo (2).svg'
import './Header.css'
import Button from '../Generics/Button'

const Header = () => {
  return (
    <header>
         <div className="container">
            
            <button className="btn-menubars"><i className="fa-solid fa-bars-staggered"></i></button>
            <div className="logotype">
                <a href="index.html" className="logotype"><img src={img_logo} alt="logo"/></a>
            </div>
            <div className="contactinformation-bar">
                <div className="content-box">
                    <i className="fa-regular fa-phone-volume"></i>
                    +46 (8) 121 470 50
                </div>
                <div className="content-box">
                    <i className="fa-regular fa-envelope"></i>
                    Info@crito.com
                </div>
                <div className="content-box last">
                    <i className="fa-sharp fa-light fa-location-dot"></i>
                    Sveavägen 31,111 34 STOCKKHOLM
                </div>
            </div>
            <div className="socialmedia-bar">
                
                <a href="http://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                <a href="http://twitter.com" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                <a href="http://instagram" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                <a href="http://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            </div>
            <div className="menu">
                
                <nav>
                    <a className="active" href="index.html">Home</a>
                    <a href="service.html">Service</a>
                    <a href="news.html">News</a>
                    <a href="contact.html">Contact</a>
                </nav>

                
                <div className="loginknapp">
                    <Button text="Login" url="/login" />
                </div> 
                
            </div>
            
        </div>
    </header>
  )
}

export default Header