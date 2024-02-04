import React from 'react'

function SideBar() {
  return (
    <>
    <div className='w-[350px] h-full basic-border-color'>
      {/* 検索設定 */}
      <div className='w-full h-[65px] flex justify-center items-center border-white border-b text-white'>
        <div className='w-[90%]'>検索設定</div>
      </div>
      {/* お気に入り商品 */}
      <div className='w-full h-[65px] flex justify-center items-center border-white border-b text-white'>
        <div className='w-[90%]'>お気に入り商品</div>
      </div>
      {/* メッセージ */}
      <div className='w-full h-[65px] flex justify-center items-center border-white border-b text-white'>
        <div className='w-[90%]'>メッセージ</div>
      </div>
      {/* 取引履歴 */}
      <div className='w-full h-[65px] flex justify-center items-center border-white border-b text-white'>
        <div className='w-[90%]'>取引履歴</div>
      </div>
      {/* アカウント情報 */}
      <div className='w-full h-[65px] flex justify-center items-center border-white border-b text-white'>
        <div className='w-[90%]'>アカウント情報</div>
      </div>
    </div>
    </>
  )
}

export default SideBar