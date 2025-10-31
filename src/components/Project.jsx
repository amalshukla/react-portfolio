import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from "framer-motion"


const Project = () => {
  return (
    <div className='border-b border-neutral-800 pb-4'>
        <motion.h1 
         whileInView={{ opacity: 1 , y: 0}}
         initial={{ opacity: 0 , y: -100}}
         transition={{duration: 1.5}}
         className='my-20 text-center text-4xl'>Project</motion.h1>     <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((prj, index) => (
            <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 1 }}
                className="rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
                <img
                src={prj.image}
                alt={prj.title}
                className="rounded-xl mb-4 w-full h-48 object-cover"
                />

                <h5 className="text-xl font-bold mb-2 text-white">{prj.title}</h5>
                <p className="text-neutral-400 mb-4">{prj.description}</p>

                <div className="flex flex-wrap gap-2">
                {prj.technologies.map((tech, index) => (
                    <span
                    key={index}
                    className="bg-purple-900/40 text-purple-300 px-3 py-1 rounded-lg text-sm"
                    >
                    {tech}
                    </span>
                ))}
                </div>
            </motion.div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default Project