import React from 'react'
import coba from "../../assets/coba.jpeg"


const Hero = () => {
  return (
    <div className='container'>
      <div className="w-[250px] h-[300px] m-5 bg-slate-200">
          <img src={coba} alt="" className='w-full h-[150px] object-cover' />
          <h1>title</h1>
          <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, eveniet!</p>

      </div>
    </div>
  )
}

export default Hero
