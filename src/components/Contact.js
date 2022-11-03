import React from 'react'
import {Link, Outlet } from 'react-router-dom'



export default function Contact() {
  return (
    <div className='Contact'>
      <div className='Contactheader'>
        Contact Us
      </div>
      <div className='Contactbody'>
        Collaboration is key and we would love to hear from you.<br></br> Here is how we can be reached
      </div>
      <div className='Contactlink'>
        <Link to="Visit">Click to Visit Us</Link>
      </div>
      <Outlet />
  
    </div>
  )
}
