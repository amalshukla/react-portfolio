import React from 'react'
import myimage from '../assets/me.jpg'
import { ABOUT_TEXT } from '../constants'
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1  whileInView={{ opacity: 1 , y: 0}}
                initial={{ opacity: 0 , y: -100}}
                transition={{duration: 0.5}}
                className='my-20 text-center text-4xl'>About 
            <span className='text-neutral-500'> Me !</span></motion.h1>
        <div className='flex flex-wrap '>
           
            <motion.div
            whileInView={{ opacity: 1 , x: 0}}
            initial={{ opacity: 0 , x: 100}}
            transition={{duration: 0.5}}
            
            className='w-full lg:w-1/2'>
                <div className='justify-center lg:justify-start'>
                    <h1 className='my-2 max-w-xl text-2xl p-6 bg-gradient-to-r from-indigo-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>Hello there !!</h1>
                    <p className='my-2 max-w-4xl text-xl p-6'>{ABOUT_TEXT}</p>
                </div>
            </motion.div>
             <div className='w-full h-100 lg:w-1/2 lg:p-8'>
                <motion.div
                whileInView={{ opacity: 1 , x: 0}}
                initial={{ opacity: 0 , x: -100}}
                transition={{duration: 0.5}}
                className='flex item-center justify-center'>
                        <img className='rounded-2xl w-[450px] h-[450px] object-cover' src={myimage} alt='about me'></img>
                </motion.div>
            </div>
            
        </div>
    </div>
  )
}

export default About