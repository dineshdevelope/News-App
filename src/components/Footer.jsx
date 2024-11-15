import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='bg-black text-white py-10 flex justify-between px-2 sm:px-10'>
        <div className=' flex items-center  space-x-4'>
            <div>
            <div className='bg-black w-40'>
            <a href="https://www.inshorts.com/" target='_blank'><img  src="https://assets.inshorts.com/website_assets/images/logo_footer.png" alt="inshorts" /></a>
            </div>
            <div className='text-sm font-light pl-12'>
            <p ><span className='font-semibold cursor-pointer'>Inshorts</span> Pte Ltd</p>
            <p >@COPYRIGHT 2024</p>
            </div>
            </div>
            <div className='text-sm'>
                <h1 className='py-2'>Contact Us</h1>
                <p  className='cursor-pointer'><a href="https://www.inshorts.com/tnc" target='_blank'>Terms & conditions</a></p>
                <p  className='cursor-pointer'><a href="https://www.inshorts.com/tnc" target='_blank'>Privacy Policies</a></p>
            </div>
        </div>
        <div className='sm:grid sm:grid-cols-3 space-x-1 sm:space-x-3 items-end'>
        <a href="https://www.facebook.com/inshortsapp" target='_blank'><img alt="Facebook" src="https://assets.inshorts.com/website_assets/images/facebook.png" className='text-white w-8 ' /></a>
        <a href="https://x.com/inshorts" target='_blank'><img alt="Twitter" src="https://assets.inshorts.com/website_assets/images/twitter.png" className='text-white w-8 ' /></a>
        <a href="https://www.linkedin.com/company/inshorts-group/" target='_blank'>
        <img alt="Linkedin" src="https://assets.inshorts.com/website_assets/images/linkedin.png" className='text-white w-8 ' />
        </a>
        </div>
       
    </div>
    </div>
  )
}

export default Footer