import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

function SideBar() {
  return (
    <>
    <div className='w-[350px] h-screen basic-border-color'>
      {/* 検索設定 */}
      <div className='w-full h-[65px] flex justify-center items-center border-white border-b text-white'>
        <SearchIcon className='mx-3'/>
        <div className='w-[90%]'>検索設定</div>
      </div>
      {/* お気に入り商品 */}
      <div className='w-full h-[65px] flex justify-center items-center border-white border-b text-white'>
        <BookmarkBorderIcon className='mx-3'/>
        <div className='w-[90%]'>お気に入り商品</div>
      </div>
      {/* メッセージ */}
      <div className='w-full h-[65px] flex justify-center items-center border-white border-b text-white'>
        <MailOutlineIcon className='mx-3'/>
        <div className='w-[90%]'>メッセージ</div>
      </div>
      {/* 取引履歴 */}
      <div className='w-full h-[65px] flex justify-center items-center border-white border-b text-white'>
        <HistoryEduIcon className='mx-3'/>
        <div className='w-[90%]'>取引履歴</div>
      </div>
      {/* アカウント情報 */}
      <div className='w-full h-[65px] flex justify-center items-center border-white border-b text-white'>
        <PermIdentityIcon className='mx-3'/>
        <div className='w-[90%]'>アカウント情報</div>
      </div>
    </div>
    </>
  )
}

export default SideBar