import React from 'react'

const Card = () => {
  return (
    <div className='w-[20vw] rounded-xl py-6  px-6 flex flex-col items-center  text-center h-80 bg-white text-black'>
        <img className='h-24 w-24 rounded-full' src="https://i.pinimg.com/736x/f5/a8/fe/f5a8fe04884fb2f26d31de731bf41c7e.jpg" alt="" />
        <h1 className='text-2xl mt-2 font-semibold'>manjunath madar</h1>
        <h5 className='text-blue-500 text-semibold text-lg my-2 '>developer</h5>
        <p className='font-medium text-sm leading-tight'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, tempore?</p>
        <button className='px-4 py-2 rounded bg-red-600 text-xs active:scale-95 cursor-pointer'>remove</button>
    </div>
  )
}

export default Card