import React from 'react'
import Navbar from '../components/Common/Navbar'

const Signup = () => {
  return (
    <div className='min-h-screen text-lg w-full bg-zinc-900 text-white font-["neo-montreal"]'>
      <Navbar />
      <div className="w-full min-h-screen  flex items-center justify-center pt-16 ">
        <form
        style={{backgroundImage:`url(/src/pages/img/login.jpg)`}}
          action=""
          className=" bg-center bg-cover flex flex-col gap-6 items-center w-[90%] p-4 border-[1px] border-zinc-800 rounded-lg"
        >
          <h1 className="capitalize tracking-wider text-4xl bg-blue-900 p-2 rounded-xl font-bold">Sign Up</h1>
          <div className="flex flex-col  gap-4">
            <div className=" justify-center items-center flex gap-4">
              <label className="w-[40%]">Email :</label>
              <input className="bg-zinc-800  p-2 border-[1px] outline-none border-zinc-500 rounded-lg" type="email"  required/>
            </div>
            <div className=" justify-center items-center flex gap-4">
              <label className="w-[40%]">Password :</label>
              <input className="bg-zinc-800  p-2 border-[1px] outline-none border-zinc-500 rounded-lg" type="password"  required/>
            </div>
            
          </div>

          <button
            className="bg-blue-500 hover:scale-110 transition-all rounded-lg p-2"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signup