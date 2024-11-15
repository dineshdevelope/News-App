import React from 'react'

const Header = () => {
  return (
    <div className='max-w- lg:max-w-5xl  sm:mx-auto '>
        <div className='bg-red-500 py-3 px-5 flex justify-evenly items-center space-x-4'>
          <h1 className='text-white'>For the best experience use <span className='font-semibold cursor-pointer'>inshorts</span> app on your smartphone</h1>
          <div className='sm:flex justify-between sm:space-x-3 space-y-3 sm:space-y-0'>
          <img className="cursor-pointer" src="https://assets.inshorts.com/website_assets/images/appstore.png" height="52" width="140" alt="inshorts"></img>
          <img className="cursor-pointer" src="https://assets.inshorts.com/website_assets/images/playstore.png" height="52" width="140" alt="inshorts"></img>
          </div>
        </div>
    </div>
  )
}

export default Header