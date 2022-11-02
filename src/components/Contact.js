import React from 'react'
import {Link} from 'react-router-dom'

export default function Contact() {
  return (
    <div className='Contact'>
      <div className='Contactheader'>
        Contact Us
      </div>
      <div className='Contactbody'>
        234 Alfred Chado Parkway,<br></br> Mountain View, California, U.S.
      </div>
      <div className='Contactlink'>
        <Link to="/Contact/visit">Click to Visit Us</Link>
      </div>
    </div>
  )
}
