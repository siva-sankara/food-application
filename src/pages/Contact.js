import React from 'react'
import './Contact.css'
const Contact = () => {
    const handleContactClick =()=>{
        window.location.href = "https://mail.google.com";
    }
  return (
    <div className='conatct'>
      
        <button className="sendmail" onClick={handleContactClick}>Send A Mail </button>
      
    </div>
  )
}

export default Contact
