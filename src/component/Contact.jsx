import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';
const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async(data) => {
    const userInfo={
      name:data.name,
      email:data.email,
      message:data.message
    }
try{
  await axios.post("https://getform.io/f/ajjjqqga",userInfo);
  toast.success("your message has been sent");
}catch(error){
  console.log(error)
  toast.error("Something went Wrong")
}
  }
  return (
    <>
    <div className='bg-blue-950 text-white  font-poppins  mt--18 pt-12 h-5/6'>
       <div name="Contacts" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
    <h1 className='md:text-5xl text-xl text-cyan-500 font-bold mb-5'>
      <span className='text-white'>Contact </span>Me</h1>
    <span className='md:text-2xl text-sm '>Let's Work Together</span>
    <p className='md:text-xl text-sm'>I'm open to discussing web development projects on partnership opportunities.</p>
    <br/><div className='flex flex-col items-center justify-center mt-5'>
      <form  onSubmit={handleSubmit(onSubmit)}
      //  action="https://getform.io/f/ajjjqqga" method='POST'
        className='bg-slate-200 w-96 px-8 py-6 rounded-xl md:mr-0  mr-12 md:ml-0 ml-12 '>
        <h1 className='text-2xl text-black font-semibold mb-4'>Send Your Message</h1>
        <div className='flex flex-col mb-4'>
          <label className='block text-gray-700'>Full Name</label>
          <input {...register("name", { required: true })}
          className='shadow rounded-lg appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
           id='name'  name='name' placeholder='Enter your name' type="text" />
                {errors.name && <span className='text-red-800' >This field is required</span>}
        </div>
        <div className='flex flex-col mb-4'>
          <label className='block text-gray-700'>Email Address</label>
          <input {...register("email", { required: true })}
          className='shadow rounded-lg appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
           id='email' name='email' placeholder='Enter your email address' type="text" />
                {errors.email && <span className='text-red-800' >This field is required</span>}
        </div>
        <div className='flex flex-col mb-4'>
          <label className='block text-gray-700'>Message</label>
          <textarea {...register("message", { required: true })}
           className='shadow rounded-lg appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
           id='message' name='message' placeholder='Enter your message' type="text" />
                {errors.message && <span className='text-red-800' >This field is required</span>}
        </div>
        <button type='submit' className='    bg-gradient-to-r from-red-400 to-indigo-500 hover:from-pink-500 hover:to-orange-500 ... bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300'>Send</button>
      </form>

    </div>
    </div>
    <br/>
    </div>
    </>
  );
}

export default Contact;
