import React from 'react'
import { motion } from "motion/react";
import { useInView } from 'react-intersection-observer';
const About = () => {
    const {ref, inView}= useInView({
        triggerOnce : true,
        threshold: 0.2,
    })
    return (
        <>
         <div
          // className='bg-gradient-to-r from-blue-950  to-blue-700 ... text-white '
             className="bg-blue-950 text-white">
         <br/> <div name="About" className='w-full max-w-screen-2xl container md:ml-0 mx-auto px-4 md:px-20 my-20'>
                <motion.h1
                  ref={ref}
          initial={{ opacity: 0,  y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
                 className='md:text-5xl text-xl text-sky-400  font-bold mb-5'> <span className='text-white'>About</span> me</motion.h1> <br/>
                <motion.p
            
          initial={{ opacity: 0,  y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{delay: 0.2, duration: 0.5 }}  className='md:text-xl text-sm font-title md:mr-0 '>
                
                    Hi, I'm Neeti. I am a passionate Full-Stack Developer with a focus on 
                    building modern and responsive web applications with a strong foundation in both
                     frontend backend technologies, 
                    I strive to create seamless and efficient user experience. My passion
                     lies in creating captivating website designs and implementing them
                     through frontend development. I take pride in staying up-to-date 
                     with current desings trends
                    and leveraging my creativity to product visually appealing and
                     user-friendly websites. Throught my career. I have devloped a deep 
                     understanding of user experience (UX) and user interface (UI) principles.
                </motion.p>
                <br/><br/>
                <motion.h1 
               initial={{ opacity: 0,  y: 100}}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{delay: 0.3, duration: 0.5 }}
                className=' text-cyan-400 font-semibold  md:text-2xl'>Eductaion </motion.h1>
            <motion.p
            
          
            initial={{ opacity: 0,  y: 100}}
            animate={{ opacity: 1, y: 0 }}
            transition={{delay: 0.1, duration: 0.5 }}
           className='md:text-xl text-sm font-title md:mr-0 ' >I am graduated from the university of panjab in 2024 with a degree in 
                Computer Application. I have also done NSQF Additional course of IT (Infromatin Technology).
                
                 </motion.p>
                <br/><br/>
<motion.h1 
   
     initial={{ opacity: 0,  y: 100}}
     animate={{ opacity: 1, y: 0 } }
     transition={{delay: 0.1, duration: 0.5 }}
className=' text-cyan-400  font-semibold md:text-2xl '>Project</motion.h1>
            <motion.span className='mb-19 md:text-xl text-sm font-title  md:mr-0'
                 
                 initial={{ opacity: 0,  y: 100}}
                 animate={{ opacity: 1, y: 0 } }
                 transition={{delay: 0.1, duration: 0.5 }}> ShopEasy - Ecommerce Website using php 
               
            </motion.span>
            <motion.p
                
                 initial={{ opacity: 0,  y: 100}}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{delay: 0.1, duration: 0.5 }} className='md:text-xl text-sm'
            > Front-end : HTML, CSS, JAVASCRIPT</motion.p>
            
            </div>
            <br/> <br/> <br/>
            <hr/>
         
            </div>
        </>
    )
}

export default About
