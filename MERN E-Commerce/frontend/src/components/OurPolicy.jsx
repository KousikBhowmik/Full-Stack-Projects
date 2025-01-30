import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col justify-around gap-12 py-20 text-xs text-center text-gray-700 sm:flex-row sm:gap-2 sm:text-sm md:text-base'>
        
        <div>
            <img className='w-12 m-auto mb-5 ' src={assets.exchange_icon}  />
            <p className='font-semibold'>Easy Exhange Policy</p>
            <p className='text-gray-400'>We offer hassle free exchange policy</p>
        </div>
        
        <div>
            <img className='w-12 m-auto mb-5 ' src={assets.quality_icon}  />
            <p className='font-semibold'>7 Days Return Policy</p>
            <p className='text-gray-400'>We provide seven days free return policy</p>
        </div>
        
        <div>
            <img className='w-12 m-auto mb-5 ' src={assets.support_img}  />
            <p className='font-semibold'>Best Customer Support</p>
            <p className='text-gray-400'>We provide 24/7 customer support</p>
        </div>

    </div>
  )
}

export default OurPolicy