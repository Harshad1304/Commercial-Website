import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className=' py-5 px-3 md:px-32 w-full flex justify-between items-center bg-transparent fixed top-0 left-0 z-[999]'>

      {/* Leftside logo-txt */}
      <div className='text-3xl font-semibold text-gray-900'>Company-Name</div>

      {/* Rightside */}
      {/* Desktop-Nav */}
      <div className='hidden xl:flex gap-10 text-white items-center'>
        <NavLink to="/" className='text-xl'>Home</NavLink>
        <NavLink to="/projects" className='text-xl'>Projects</NavLink>
        <NavLink to="about-us" className='text-xl'>About US</NavLink>
        <NavLink to="contact-us" className='text-xl bg-indigo-800 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition ease-in-out duration-300'>Contact Us</NavLink>
      </div>
      {/* Mobile-Nav */}
      <div className='mobile-nav'>
        {/* Mobile-nav button */}
        <p className='text-3xl font-bold'>BTN</p>
      </div>
    </nav>
  )
}

export default Navbar