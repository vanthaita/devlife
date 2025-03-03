import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full h-20 border-t-2 border-black flex justify-between items-center px-8'>
        <div className='flex justify-center items-center'>
            <p className='font-bold text-3xl text-black/90 mr-4'>
                @devlife
            </p>
        </div>
        <div className="border-l-2 h-20 border-black flex justify-center items-center cursor-pointer">
            <p className='font-bold text-3xl pl-8 hover:underline'>SUBSCRIBE</p>
        </div>
    </footer>
  )
}

export default Footer