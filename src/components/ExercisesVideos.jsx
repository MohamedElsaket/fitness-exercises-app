import React from 'react'

const ExercisesVideos = ({ exercisesVideos, name }) => {
  if(!exercisesVideos.length) return ' LOADING '
  return (
    <div className='bg-[#222] my-16 rounded-[50px] py-16'>
      <h2 className='text-2xl md:text-3xl pb-10 px-3 md:px-8 text-center text-white'>watch <span className='text-red-500'>{name}</span> exercises video</h2>
      <div className="grid grid-cols-12 place-items-center items-start gap-y-10 p-8">
        {exercisesVideos?.slice(0, 6).map((item, index) => 
          <a 
          key={index} 
          href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          target='_blank'
          rel='noreferrer'
          className='col-span-12 md:col-span-6 lg:col-span-4 w-[300px]'
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} className='rounded-2xl hover:scale-105 duration-300' />
            <div className="text mt-4 text-white">
              <p>{item.video.title}</p>
              <p>{item.video.channelName}</p>
            </div>
          </a>
        )}
      </div>
    </div>
  )
}

export default ExercisesVideos