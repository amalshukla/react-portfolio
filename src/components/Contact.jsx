import React from 'react'
import { CONTACT } from '../constants'
import { motion } from "framer-motion"
import contact from '../assets/connect.jpg'
import Click from './Click'
import Button from './Button'


const Contact = () => {
  return (
    <>
    <div className='border-b border-neutral-800 pb-20'>
        <motion.h1 whileInView={{ opacity: 1 , y: 0}}
         initial={{ opacity: 0 , y: -100}}
         transition={{duration: 1.5}}
         className='my-10 text-center text-4xl'>Get in Touch</motion.h1>
    
    </div>
    <div className='flex justify-between'>
      <div className='text-center tracking-tighter'>
            <h1 className='my-2 max-w-xl text-2xl p-6 bg-gradient-to-r from-indigo-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>Address</h1>


            <motion.p whileInView={{ opacity: 1 , x: 0}}
            initial={{ opacity: 0 , x: -100}}
            transition={{duration: 1.5}}
            className='my-4'>{CONTACT.address}</motion.p>
            <motion.p whileInView={{ opacity: 1 , x: 0}}
                initial={{ opacity: 0 , x: 100}}
                transition={{duration: 1.5}}
                className='my-4'>{CONTACT.phoneNo}</motion.p>
            <motion.a href='#' whileInView={{ opacity: 1 , y: -100}}
            initial={{ opacity: 0 , y: 0}}
            transition={{duration: 1.5}} 
            className='border-b'>{CONTACT.email    }</motion.a>

        </div>
        <div className='w-full h-100 lg:w-1/2 lg:p-8'>
                        <motion.div
                        whileInView={{ opacity: 1 , x: 0}}
                        initial={{ opacity: 0 , x: -100}}
                        transition={{duration: 0.5}}
                        className='flex item-center justify-center'>
                                <img className='rounded-xl w-[350px] h-[200px] object-cover mt-10' src={contact} alt='about me'></img>
                        </motion.div>
         </div>
        


    </div>
    
    </>

  )
}

export default Contact