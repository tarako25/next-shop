import React from 'react'

const section = (data: any) => {
  return (
    <>
    <div className='flex justify-start items-center'>
          <div className='w-[20px] h-[35px] bg-[#7BBD71] mr-4'/>
          <p>{data.text}</p>
    </div>
    </>
  )
}

export default section