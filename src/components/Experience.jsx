import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from "framer-motion"

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1 
         whileInView={{ opacity: 1 , y: 0}}
         initial={{ opacity: 0 , y: -100}}
         transition={{duration: 1.5}}
        className='my-20 text-center text-4xl'>Experience</motion.h1>
         <div className="flex flex-wrap justify-center gap-10">
            {EXPERIENCES.map((exp, index) => (
                <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4  text-white p-5 rounded-2xl shadow-lg hover:shadow-purple-500/20 transition-all"
                >
                <p className="text-sm text-neutral-400 mb-2">{exp.year}</p>
                <h6 className="font-semibold mb-1">
                    <h1>{exp.role}</h1>
                    <span className="text-sm text-purple-300 m-2"> {exp.company}</span>
                </h6>
                <p className="text-neutral-400 mb-3">{exp.description}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {exp.technologies.map((tech, i) => (
                    <span
                        key={i}
                        className="bg-neutral-800 text-indigo-300 text-sm px-2 py-1 rounded-md"
                    >
                        {tech}
                    </span>
                    ))}
                </div>
                </motion.div>
            ))}
            </div>
        
       
                
            
    </div>
  )
}

export default Experience