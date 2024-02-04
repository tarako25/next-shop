import Image from 'next/image'
import React from 'react'
import logo from '../../../public/logo.png'
function Header() {
  return (
    <>
    <div className='w-full h-[100px] bg-white border-gray-200 border-b-2'>
      <div className='flex justify-center items-center w-full h-full'>
        <div className='flex justify-between items-center w-[95%] h-full'>
          <Image src={logo} width={150} alt="ロゴ"/>
          <div className='flex justify-center items-center'>
            <Image src="" width={55} alt ="プロフィール画像"  className='rounded-full border-2 w-[55px] h-[55px] mr-5'/>
            <div className='mr-5'>山田   太郎</div>
            <div className='basic-border-color py-2 px-4 rounded-lg text-white'>出品する</div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header