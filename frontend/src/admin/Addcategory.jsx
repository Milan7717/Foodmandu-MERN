import React from 'react'
import Navbar from '../components/Common/Navbar'

const Addcategory = () => {
  return (
    <div className='min-h-screen text-lg w-full bg-zinc-900 text-white font-["neo-montreal"]'>
        <Navbar />
        <div className='w-full min-h-screen  flex items-center justify-center pt-16 '>
            <form action="" className=' flex flex-col gap-6 items-center w-[90%] p-4 border-[1px] border-zinc-800 rounded-lg'>
                <h1 className='capitalize tracking-wider text-3xl'>Add The category of the food</h1>
                <div className=' flex flex-col gap-6'>
                    <div className='flex gap-6'>
                    <label className='w-[50%]'>Image :</label>
                    <input type="file" />
                    </div>
                    <div className='flex gap-6'>
                    <label className='w-[50%]'>Name of category :</label>
                    <input type="text" className='outline-none bg-zinc-800 p-1' />
                    </div>
                    
                </div>
                <button className='bg-blue-500 hover:scale-110 transition-all rounded-lg p-2' type="submit">Submit</button>

            </form>

        </div>
    </div>
  )
}

export default Addcategory