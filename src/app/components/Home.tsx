import React from 'react'
import Section from '@/app/components/Item/section'
function Home() {
  return (
    <>
    <div className='w-full h-full bg-white flex justify-center items-center'>
      <div className='w-[95%] h-full'>
        <input type="text" className='w-[600px] h-[40px] my-5 border-[#7BBD71] border-2 rounded-3xl'/>
        <Section text="最近閲覧した商品" />
      </div>
    </div>
    </>
  )
}

export default Home