import React from 'react'
import logo from '../assets/image11.jpg'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <h2>AS</h2>
        </div>
        <div className='m-6 flex items-center justify-center gap-4 '>
          
          <a
            href="https://www.linkedin.com/in/amalshukla/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/amalshukla"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            <FaGithub />
          </a>
          </div>
    </nav>
  )
}

export default Navbar