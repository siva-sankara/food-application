import React ,{useState} from 'react'
import './Navbar.css'
import navlogo from './nav-logo.svg'
import {Link, NavLink} from 'react-router-dom'
const Navbar = () => {

    const navlist =[
        {
            name : "Home",
            path:"/"
        },
        {
            name :"Order",
            path:"/order"
        },
        {
            name:"Company",
            path:"/aboutus"
        },
        {
            name:"FAQ",
            path:"/frequently-question"
        },
        
    ]
    const handleContactClick =()=>{
        window.location.href = "https://mail.google.com";
    }
    

  return (
    <div className='navbar'>
        <div className='nav--logo'>
            <img className="logo"src={navlogo}/>
        </div>
        <div className='nav--list'>
            {
                navlist.map((eachobj)=>{
                    return (
                        <li><Link className='link' to={`${eachobj.path}`}>{eachobj.name}</Link></li>
                    )
                })
            }
            <li><Link className="link" onClick={handleContactClick}>Contact</Link></li>
           <div className='cart-button'>

           </div>
        </div>
    </div>
  )
}

export default Navbar
