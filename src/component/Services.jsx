import React from 'react'
import { motion } from "motion/react";
import { useInView } from 'react-intersection-observer';

  
const Services = () => {
    const service=[
        {
            id:1,
            title:"web design",
            description:"creating visually appealing and user-friendly web design.",
        },
        {
            id:2,
            title:"Frontend Development",
            description:"Building responsive and interactive user interfaces.",
        },     {
            id:3,
            title:"Backend Development",
            description:"Development robust server-side logic and database.",
        },     {
            id:4,
            title:"Full-stack Development",
            description:"Combining both fronend and backend development skills.",
        },
        
        
    ]
    const {ref, inView}= useInView({
        triggerOnce : true,
        threshold: 0.2,
    })
  return (
    <>
          <div 
        //   className='bg-gradient-to-r from-blue-950  to-blue-700 ... text-white '
            className="bg-blue-950 text-white"
          >
         <br/> <div name="Services" className='w-full max-w-screen-2xl container md:ml-0 mx-auto px-4 md:px-20 my-20'>
                <motion.h1
                  ref={ref}
          initial={{ opacity: 0,  y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
                 className='md:text-5xl text-xl text-sky-400  font-bold mb-5'> <span className='text-white'>My</span> Services</motion.h1> <br/>
       
       
       
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {service.map(service=>(
                <div key={service.id}
                className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg 
                transform transition-transform duration-300 hover:scale-105'>

                    <div className='text-right md:text-2xl text-sm font-bold
                     text-transparent bg-clip-text bg-gradient-to-r from-green-600 to blue-400'>
                        {service.id}

                        </div>
                        <h3 className='mt-2 md:text-2xl  text-xl font-bold text-transparent
                         bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                            {service.title}
                        </h3>
                        <p className='mt-6 text-gray-300'>{service.description}</p><br/>
                </div>
            ))}

           </div>
              
           </div>
            <br/> <br/> <br/>
            <hr/>
         
            </div>
    </>
  )
}

export default Services
