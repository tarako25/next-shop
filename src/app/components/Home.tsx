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
        <div className='relative'>
          <SearchIcon className='absolute top-0 h-[80px] ml-4 text-[#7BBD71]'/>
          <input type="text" placeholder='商品を検索' className='w-[600px] h-[40px] px-10 my-5 border-[#7BBD71] border-2 rounded-3xl'/>
        </div>
        {/* 最近閲覧した商品 */}
        <div className='mb-5 '>
          <Section text="最近閲覧した商品" />
          <div className='flex justify-start items-center flex-wrap'>
            <div className='my-5 mr-3 w-[150px] flex flex-wrap flex-col items-center justify-center'>
              <Image src={sample} alt="sample" className='w-[150px] h-[150px]' />
              <div className='text-sm mt-1'>みかんミックスサイズ【家庭用(訳あり品)</div>
            </div>
          </div>
          <MoreButton />
        </div>
        {/* 人気商品 */}
        <div className='mb-5 '>
          <Section text="人気商品" />
          <div className='flex justify-start items-center flex-wrap'>
            <div className='my-5 mr-3 w-[150px] flex flex-wrap flex-col items-center justify-center'>
              <Image src={sample} alt="sample" className='w-[150px] h-[150px]' />
              <div className='text-sm mt-1'>みかんミックスサイズ【家庭用(訳あり品)</div>
            </div>
          </div>
          <MoreButton />
        </div>
        {/* 新着商品 */}
        <div className='mb-5 '>
          <Section text="新着商品" />
          <div className='flex justify-start items-center flex-wrap'>
            <div className='my-5 mr-3 w-[150px] flex flex-wrap flex-col items-center justify-center'>
              <Image src={sample} alt="sample" className='w-[150px] h-[150px]' />
              <div className='text-sm mt-1'>みかんミックスサイズ【家庭用(訳あり品)</div>
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