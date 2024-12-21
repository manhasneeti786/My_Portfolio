import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import pic from '../images/me.jpg'
import { motion } from "motion/react";
import ReactTyped from "react-typed-component";
const Home = () => {
  return (
    <>
    <div
    // className='bg-gradient-to-r from-blue-950  to-blue-700 ... text-white'
    className="bg-blue-950 text-white"
    >
 
      <br/> <br/> <br/> <br/> <div name="Home" className='max-w-screen-2xl container md:ml-0 ml-6 mx-auto px-4  md:px-20  my-20'>
        <div className='flex flex-col md:flex-row'>
          <motion.div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'
          
          initial={{ opacity: 0,  x: -100}}
          animate={{ opacity: 1, x: 0 }}
          transition={{delay:1.1, duration: 0.6 }}>
          
            <motion.span className='text-2xl'
              initial={{ opacity: 0,  x: -100}}
              animate={{ opacity: 1, x: 0 }}
              transition={{delay:0.1, duration: 0.5 }}
            >Welcome In My Feed</motion.span>
            <div className='flex space-x-3 text-2xl md:text-4xl'>
              <h1>Hello, I am a </h1>
              <motion.span className='text-lime-400 md:mr-3.5  font-bold'
                 initial={{ opacity: 0,  x: -100}}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{delay:1.5, duration: 0.5 }}
              >    <ReactTyped
              className='text-sky-400 font-bold'
                    strings = {["Developer","Programmer","coders"]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop={true}
                  /></motion.span>
            
            </div>
            <br />
            <p className='text-sm md:text-xl mr-12 md:mr-0 font-title text-justify'>
            Hi, I'm Neeti. I am a passionate Full-Stack Develope. I specialize in building modern and responsive web applications.
                          </p>
            <br />
            {/* socail media icons */}
            <div className='flex flex-col items-center md:flex-row justify-between mr-12 md:mr-0 space-y-6 md:space-y-0'>
              <div className='space-y-2'>
                <h1 className='font-bold md:text-xl '>Available on</h1>
                <ul className='flex  space-x-5'>

                  <li className='md:text-2xl  text-xl '> <a href="https://github.com/manhasneeti786" target='_blank'>
                  <FaGithub  classname='text-lg  cursor-pointer' /></a></li>
                  <li className='md:text-2xl text-xl '>
                    <a href="https://www.instagram.com/official_manhas_neeti/" target='_blank'><FaInstagram 
                    classname='md:text-2xl  cursor-pointer' />
                    </a></li>

                  <li className='md:text-2xl text-xl  '>
                    <a href="https://www.youtube.com/@neetithakur6118" target='_blank'> <FaYoutube
                     classname='md:text-2xl  cursor-pointer' /></a>
                  </li>

                  <li className='md:text-2xl text-xl '> <a href="https://www.linkedin.com/in/neeti-thakur-9a4248255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'>
                   <FaLinkedin classname='md:text-2xl  cursor-pointer' /></a></li>
                </ul>
              </div>
              <div className='space-y-2'>
                <h1 className='font-bold md:text-xl '>Currently working on</h1>
                <div className='flex  space-x-5'>
                  <FaHtml5 className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                  <FaReact className='text-2xl bg-cyan-500 md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                  <FaCss3Alt className='text-2xl bg-blue-700 md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                  <IoLogoJavascript className='text-2xl  md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                </div>
              </div>
            </div>
          </motion.div>
          <div className='md:w-1/2  md:ml-40 md:mt-10 order-1'  >
          
            <motion.img src={pic} 
             initial={{ opacity: 0,  scale:0.1}}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay:0.5, duration: 0.5}}
            className='rounded-full md:w-[430px] md:h-[430px] h-[350px] w-[350px]'  alt="picture of coder" />
          </div>
        </div>
      </div>
      <br/> <br/> <br/> 
      </div>
      
      <hr/>
    </>
  )
}

export default Home
