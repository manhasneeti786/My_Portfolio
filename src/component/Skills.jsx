import React from 'react';
import html from '../images/html.png'
import css from '../images/css.png'
import javascript from '../images/javascript.png'
import Reactlogo from '../images/react.jpg'
import canvalogo from '../images/canva.jpg'
import nodelogo from '../images/node.jpg'
import figma from '../images/figma.png'
import java from '../images/java.png'
import { motion } from "motion/react";
import { useInView } from 'react-intersection-observer';
const Skills = () => {
  const {ref, inView}= useInView({
    triggerOnce : true,
    threshold: 0.2,
})
    const Carditems = [
        {
            id:1,
            logo: html,

        },
        {
            id:2,
            logo: css,
            
        },
        {
          id:3,
          logo: javascript,
          
      },
      {
        id:3,
        logo: Reactlogo,
        
    },
    {
      id:3,
      logo: canvalogo,
      
  },
  {
    id:3,
    logo: nodelogo,
    
},
{
  id:3,
  logo: figma,
  
},
{
  id:3,
  logo: java,
  
},
    ]
  return (
    <>
        <div
        //  className='bg-gradient-to-r from-blue-950  to-blue-800 ... text-white '
            className="bg-blue-950 text-white"
         >
    <br/>  <div name="Skills"
    
    className=' bg-blue-950  text-white w-full max-w-screen-2xl container md:ml-0 mx-auto px-4 md:px-20 my-20'>
      
              <motion.h1
         
      initial={{ opacity: 0,  y: 100}}
      animate={{ opacity: 1, y: 0 }}
      transition={{delay: 0.1, duration: 0.5 }}
      
      
      className='md:text-5xl text-xl text-cyan-500 font-bold mb-5'><span className='text-white'>My</span> Skills</motion.h1>
      <motion.p 
         ref={ref}
         initial={{ opacity: 0,  y: 100}}
         animate={inView ?{ opacity: 1, y: 0 } : {}}
         transition={{delay: 0.1, duration: 0.5 }}
      className='md:text-xl text-sm'>I've experience in below technologies: </motion.p>
      <br/> <br/>
      <div className='space-y-4  md:mr-0'>
               <div className='flex items-center'>
                    <label htmlFor="Htmlandcss" className='w-2/12 md:text-xl text-sm'>HTML & CSS</label>
                    <div className='grow bg-gray-800   md:ml-0  rounded-full h-2.5'>
                         <div className='bg-gradient-to-r from-sky-400 to-cyan-300 h-2.5 rounded-full transform 
                         transition-transform duration-300 hover:scale-105 w-11/12'>

                         </div>

                    </div>
               </div>
               <div className='flex items-center'>
                    <label htmlFor="REACTJS" className='w-2/12 md:text-xl text-sm'>REACT JS</label>
                    <div className='grow bg-gray-800   md:ml-0  rounded-full h-2.5'>
                         <div className='bg-gradient-to-r from-sky-400 to-cyan-300 h-2.5 rounded-full transform 
                         transition-transform duration-300 hover:scale-105 w-10/12'>

                         </div>

                    </div>
               </div>
               <div className='flex items-center'>
                    <label htmlFor="JAVASCRIPT" className='w-2/12 md:text-xl text-sm'>JAVASCRIPT</label>
                    <div className='grow bg-gray-800  md:ml-0 rounded-full h-2.5'>
                         <div className='bg-gradient-to-r from-sky-400 to-cyan-300 h-2.5   rounded-full transform 
                         transition-transform duration-300 hover:scale-105 w-10/12'>

                         </div>

                    </div>
               </div>
               <div className='flex items-center'>
                    <label htmlFor="nodejs" className='w-2/12 md:text-xl text-sm'>NODE JS</label>
                    <div className='grow bg-gray-800 rounded-full   md:ml-0  h-2.5'>
                         <div className='bg-gradient-to-r from-sky-400 to-cyan-300 h-2.5 rounded-full transform 
                         transition-transform duration-300 hover:scale-105 w-7/12'>

                         </div>

                    </div>
               </div>
            </div><br/><br/>
      <div className='grid grid-cols-2 px-0 m-0 md:grid-cols-5 md:gap-12  gap-5 md:my-3'>
    {
        Carditems.map(({id, logo})=> (
            <div className=' flex flex-col items-center justify-center  md:mr-0
             bg-white border-[2px]  rounded-full md:w-[150px] md:h-[150px] w-[100px] shadow-lg p-1 cursor-pointer hover:scale-110 duration-300'
             key={id}>
                <motion.img 
               
                     initial={{ opacity: 0,  scale:0.1}}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ delay:0.1, duration: 0.5}}
                src={logo} className='md:w-[150px] w-[100px]  rounded-full' alt='logo' />
            </div>
            
        )
        )
    }

      </div>
      </div>
      <br/> <br/><br/><br/>
      </div>

      <hr/>
      
    </>
  );
}

export default Skills;
