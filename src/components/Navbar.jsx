import React from 'react'
import logo from '../assets/logoo.png'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <h2>AS</h2>
        </div>
        <div className='m-6 flex items-center justify-center gap-4 '>
          <FaLinkedin />
          <FaGithub />
        </div>
    </nav>
  )
}

export default Navbar