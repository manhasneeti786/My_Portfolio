import React, { useState } from 'react'
import pic from '../images/mei.jpg'
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import {Link} from 'react-scroll'
import { motion } from "motion/react";

const navbar = () => {
  const [menu,setMenu]=useState(false)
  const navitems=[
    {
      id:1,
      text:"Home"
    },
    {
      id:2,
      text:"About"
    },
    {
      id:3,
      text:"Skills"
    },
    {
      id:4,
      text:"Services"
    },
    {
      id:5,
      text:"Contacts"
    },
  ]
  return (
    <>
      <div className='max-w-screen-2xl bg-blue-950 text-white container z-50 text-lg mx-auto px-4 md:px-20 h-16 shadow-md shadow-sm fixed top-0 left-0  right-0 '>
        <motion.div className='flex justify-between items-center h-16'
        initial={{ opacity: 0,  y: -50}}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}>
          <div className='flex space-x-2'>
            <img src={pic} className="h-12 w-12 rounded-full" alt="" />
            <h1 className='font-semibold text-xl cursor-pointer'> Neeti
            <p className='text-sm'>Web Developer</p></h1>
          </div>
          {/* desktop navbar */}
          <div>
            <ul className='hidden md:flex  md:text-2xl space-x-8'>
              {
              navitems.map(({id,text})=>(
                <li className='hover:scale-105 hover:text-sky-300 duration-200 cursor-pointer'
                 key={id}>
                  <Link to={text} smooth={true} duration-500 offset={-70}
                   activeClass='active'
                  >{text}</Link>
                  
                  </li>
              ))
              }
            </ul>
            <div onClick={()=>setMenu(!menu)} className='md:hidden  md:mr-0  mr-12'>
            {menu?< IoMdClose size={24} className='font-black'/>:< CiMenuBurger className='font-black' size={24}/>}
            </div>
          </div>
        </motion.div>
        {/* mobile navbar */}
        {
          menu && (
          <motion.div className='bg-blue-950'
          initial={{ opacity: 0,  y: -50}}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          
          <ul className='md:hidden  flex flex-col h-screen items-center  text-2xl justify-center space-y-3'>
          {
              navitems.map(({id,text})=>(
                <li className='hover:scale-105 hover:text-sky-300 duration-200
                 font-semibold cursor-pointer' key={id}>
                <Link to={text}
                onClick={()=>setMenu(!menu)} 
                 smooth={true} duration-500 offset={-70}
                   activeClass='active'
                  >{text}</Link>
                  </li>
              ))
              }
          </ul>
        </motion.div>
          )
        }
        
      </div>
    </>
  )
}

export default navbar