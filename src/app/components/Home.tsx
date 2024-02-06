import React from 'react'
import Section from '@/app/components/Item/section'
import MoreButton from '@/app/components/Item/moreButton'
import sample from '../../../public/sample.png'
import Image from 'next/image'
import SearchIcon from '@mui/icons-material/Search';

function Home() {
  return (
    <>
    <div className='w-full h-full bg-white flex justify-center items-center'>
      <div className='w-[95%] h-full'>
        <input type="text" className='w-[600px] h-[40px] my-5 border-[#7BBD71] border-2 rounded-3xl'/>
        {/* 最近閲覧した商品 */}
        <div className='mb-5 '>
          <Section text="最近閲覧した商品" />
          <div className='flex justify-start items-center flex-wrap'>
            <div className='my-5 mr-3'>
              <Image src={sample} alt="sample" className='w-[135px] h-[135px]' />
            </div>
          </div>
          <MoreButton />
        </div>
        {/* 人気商品 */}
        <div className='mb-5'>
          <Section text="人気商品" />
          <div className='flex justify-start items-center flex-wrap'>
            <div className='my-5 mr-3'>
              <Image src={sample} alt="sample" className='w-[135px] h-[135px]' />
            </div>
          </div>
          <MoreButton />
        </div>
        {/* 新着商品 */}
        <div className='mb-5'>
          <Section text="新着商品" />
          <div className='flex justify-start items-center flex-wrap'>
            <div className='my-5 mr-3'>
              <Image src={sample} alt="sample" className='w-[135px] h-[135px]' />
            </div>
          </div>
          <MoreButton />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home