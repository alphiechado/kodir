import React from 'react'
import Homeimage2 from '../assets/Homeimage2.png';
import { Link, } from 'react-router-dom'




export default function Home() {
  return (
    <div className='Home'>
      <div>
      <h1 className='Homeheader'>Connect with Devs</h1>
      <p className='Homepara'>
        Meet and connect with amazing frontend developers all over the world. Share ideas, collaborate and build together.
      </p>
      <Link to= "/Users">
      <button className='Homebutton'>Connect</button>
      </Link>
      
      </div>
      <div>
      <img className='Homeimage2' src={Homeimage2} alt='Homeimage'/>
      </div>
    </div>
  )
}
