import React from 'react'

export const Header = () => {
  return (
    <div className='flex justify-between pt-6 text-[20px] container  left-[50%] translate-x-[-50%] px-[10%] fixed'>
        <div className='flex items-center'>My Logo</div>
        <ul className='flex w-[40%] px-5 justify-between gap-10 text-[18px] items-end border-b-2 border-[silver]/40 pb-2'>
            <li>Home</li>
            <li>Project</li>
            <li>About</li>
            <li>Contacts</li>
        </ul>
        <div className='bg-[#C9F31D] px-6 py-2 pr-15 text-black'>Контакты</div>
    </div>
)}