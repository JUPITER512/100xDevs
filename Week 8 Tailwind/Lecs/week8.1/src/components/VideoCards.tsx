import React from 'react'

const VideoCards = (props:any) => {
  return (
    <div>
      <img src={props.image} alt=""  className=' rounded-xl'/>
      <div className='grid grid-cols-12'>
        <div className=' col-span-1'>
            <img className=' rounded-full' src={props.thumbImage} alt="" />
        </div>
        <div className=' col-span-11'>
            <div>
            {props.title}

            </div>
            <div className=' col-span-11'>
            {props.author}
        </div>
        <div className=' col-span-11 text-gray-300'>
           {props.views} | {props.timestamp}
        </div>
        </div>

      </div>
    </div>
  )
}

export default VideoCards
