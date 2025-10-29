import React from 'react'
import { HERO_CONTENT } from '../constants'
import { motion } from "framer-motion"
import Ninja from './Ninja'
import Ninjajuggling from './Ninjajuggling'

const container=(delay)=>({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay}
    }
})
const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <motion.h1 
                     variants= {container(0)}

                     initial='hidden'
                     animate="visible"
                     className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Amal Shukla</motion.h1>
                </div>
                <motion.span 
                
                variants= {container(1)}

                initial='hidden'
                animate="visible"
                className='bg-gradient-to-r from-indigo-300 via-slate-500 to-indigo-500 bg-clip-text text-4xl tracking-tight text-transparent'>
                    Full Stack Developer
                </motion.span>
                <motion.p 
                variants= {container(2)}

                initial='hidden'
                animate="visible"
                className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                    {HERO_CONTENT}
                </motion.p>            
            </div>
             <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="w-full lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0"
                >
                <div className=" relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px]">


                    <Ninjajuggling />
                    <p className='ml-28 text-lg antialiased'>"Playing with my favourite technologies"</p>

                </div>
        </motion.div>
          
        </div>
    </div>
  )
}

export default Hero