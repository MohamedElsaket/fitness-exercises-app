import React from 'react'

import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

const Details = ({ exercisesDetails }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exercisesDetails;

  const extraDetails = [
    {
      icon: BodyPartImage,
      name: bodyPart
    },
    {
      icon: TargetImage,
      name: target
    },
    {
      icon: EquipmentImage,
      name: equipment
    },
  ]
  
  return (
    <div className='grid grid-cols-12 p-8 md:p-16 bg-[#222] my-12 rounded-[50px]'>
      <img src={gifUrl} alt={name} className='col-span-12 md:col-span-6 w-[80%] m-auto rounded-[50px]' />
      <div className="text col-span-12 md:col-span-6 py-8 px-2 md:p-16">
        <h2 className='text-4xl font-bold mb-10 text-white'>{name}</h2>
        <p className='text-lg leading-5 tracking-wider text-[#dadada]'>
        Exercises keep you strong. {name} {' '}
        is one of the best exercises to target your {target}.
        It will help you improve your mood and gain energy.
        </p>
        {extraDetails.map(item => 
        <div className='flex gap-6 items-center mt-6 md:mt-12 text-[#dadada]' key={item.icon}>
          <div  className='bg-red-200 p-3 rounded-full'>
            <img src={item.icon} alt={item.name} className='w-8' />
          </div>
          <p>{item.name}</p>
        </div>)}
      </div>
    </div>
  )
}

export default Details