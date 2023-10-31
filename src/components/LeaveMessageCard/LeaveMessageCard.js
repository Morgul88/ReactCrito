import React from 'react'

const LeaveMessageCard = () => {
  return (
    
    <section className="leave-message-card">
        <div className="container">
            <h1>Leave us a message <br/> for any Information:</h1>

            <form className="sub" method="post" id="subscribe" name="subscribe">
                
                <input className="input-content" type="text" placeholder="Name*"/>
                <input className="input-content" type="email" placeholder="Email*"/>
                <textarea className="yourmessage" placeholder="Your message*" name="yourMessage" id="yourMessage" cols="30" rows="10"></textarea>
                
                <a className="btn-yellow" target="_blank" href="projects.html">Subscribe <i className="fa-regular fa-arrow-up-right"></i></a>

            </form>
            
        </div>
    </section> 
  )
}

export default LeaveMessageCard