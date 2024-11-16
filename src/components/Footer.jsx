import React from 'react'
import toast from 'react-hot-toast';

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
                <h1 className='py-2' onClick={()=>{
                 toast.custom((t) => (
                  <div
                    className={`${
                      t.visible ? 'animate-enter' : 'animate-leave'
                    } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                  >
                    <div className="flex-1 w-0 p-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 pt-0.5">
                          
                        </div>
                        <div className="ml-3 space-y-3">
                          <div>
                          <a className="text-sm  text-white  cursor-pointer bg-gray-500 p-1 hover:bg-green-600 rounded" href='mailto:careers@inshorts.com' target='_blank'>
                            CONTACT HIRING TEAM
                          </a>
                          <br/>
                          </div>
                          <div>
                          <a className="text-sm  text-white  cursor-pointer bg-gray-500 p-1 hover:bg-green-600 rounded" href='mailto:Admin@inshorts.com' target='_blank'>
                            CONTACT ADMIN TEAM
                          </a>
                          <br/>
                          </div>
                          <div>
                          <a className="text-sm  text-white  cursor-pointer bg-gray-500 p-1 hover:bg-green-600 rounded" href='mailto:Marketing@inshorts.com' target='_blank'>
                            CONTACT MARKITING TEAM
                          </a>
                           <br/>
                          </div>
                           <div>
                           <a className="text-sm  text-white  cursor-pointer bg-gray-500 p-1 hover:bg-green-600 rounded" href='mailto:Editorial@inshorts.com' target='_blank'>
                            CONTACT EDITORIAL TEAM
                          </a>
                          <br/>
                           </div>
                         <div>
                         <a className="text-sm  text-white  cursor-pointer bg-gray-500 p-1 hover:bg-green-600 rounded" href='mailto:Sales@inshorts.com' target='_blank'>
                            CONTACT SALES TEAM
                          </a>
                          <br/>
                         </div>
                         <div>
                         <a className="text-sm  text-white  cursor-pointer bg-gray-500 p-1 hover:bg-green-600 rounded" href='mailto:Contact@inshorts.com' target='_blank'>
                            CONTACT FOR ANY OTHER
                          </a>
                           <br/>
                         </div>
                           <div>
                           <a className="text-sm  text-white  cursor-pointer bg-gray-500 p-1 hover:bg-green-600 rounded" href='https://www.inshorts.com/contact-us' target='_blank'>
                            CONTACT FOR ANY ACCOUNT
                          </a>
                           <br/>
                           </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex border-l border-gray-200">
                      <button
                        onClick={() => toast.dismiss(t.id)}
                        className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                ))
                
                }}>Contact Us</h1>
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