import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <>
    <hr/>

     <footer className='py-12  bg-blue-950  text-white'>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
       <div className='flex flex-col items-center justify-center'>
       <div className='flex space-x-4'>
       <a href="https://github.com/manhasneeti786" target='_blank'> <FaGithub size={28} className=' hover:scale-110' /></a>
       <a href="https://www.instagram.com/official_manhas_neeti/"> <FaInstagram  size={28}  className=' hover:scale-110 ' /></a>
       <a href="https://www.youtube.com/@neetithakur6118" target='_blank'> <FaYoutube size={28} className=' hover:scale-110 ' /></a>
       <a href="https://www.linkedin.com/in/neeti-thakur-9a4248255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"   target='_blank'> <FaLinkedin size={28} className='  hover:scale-110 ' /></a>
        </div>
        <div className='mt-8 border-t border-white-700 pt-8 flex flex-col items-center'> 
       <div className='flex ml-17 space-x-1'> <MdEmail className='mt-1' /> <span>neetimanhas661@gmail.com</span></div>
        <p className='md:text-xl text-sm'>
          &copy; {new Date().getFullYear()} by Neeti | All rights reserved.
        </p>
        </div>
       </div>
        </div>
     </footer>
    </>
  );
}

export default Footer;
