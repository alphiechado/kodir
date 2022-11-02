import React from 'react'
import Home from './Home'
import { Link, Route, Routes } from 'react-router-dom'
import Error404 from '../assets/Error404.png'

export default function Page404() {
  return (
    <div className='Error'>
      <img src={Error404} alt='Error'/>
        <Link to="/">Go to Home</Link>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
    </div>
  )
}
