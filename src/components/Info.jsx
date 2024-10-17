import React from 'react'

const Info = () => {
  return (
    <div className='grid grid-cols-12 py-10 px-10 md:px-20 bg-[#222] my-16 rounded-[50px]'>
        <div className='col-span-12 md:col-span-3 gap-10 mb-4'>
            <h2 className='font-bold text-4xl mb-2 text-white'>500+</h2>
            <div className="text-[#dadada]">
                <p className='font-bold'>Happy Members</p>
                <p>Our community is growing fast!</p>
            </div>
        </div>
        <div className='col-span-12 md:col-span-3 gap-10 mb-4'>
            <h2 className='font-bold text-4xl mb-2 text-white'>30+</h2>
            <div className="text-[#dadada]">
                <p className='font-bold'>Weekly Classes</p>
                <p>Pic from various workouts</p>
            </div>
        </div>
        <div className='col-span-12 md:col-span-3 gap-10 mb-4'>
            <h2 className='font-bold text-4xl mb-2 text-white'>10</h2>
            <div className="text-[#dadada]">
                <p className='font-bold'>Certified Trainers</p>
                <p>Guidance at every step.</p>
            </div>
        </div>
        <div className='col-span-12 md:col-span-3 gap-10 mb-4'>
            <h2 className='font-bold text-4xl mb-2 text-white'>99%</h2>
            <div className="text-[#dadada]">
                <p className='font-bold'>Customer Satisfaction</p>
                <p>We ensure your progress satisfaction</p>
            </div>
        </div>
    </div>
  )
}

export default Info