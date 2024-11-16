import React, { useState } from 'react';

const Header = ({ onCategoryChange }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  const categories = [
    'general', // Maps to "India"
    'business',
    'politics',
    'sports',
    'technology',
    'startups',
    'entertainment',
    'hatke',
    'international',
    'automobile',
    'science',
    'travel',
    'miscellaneous',
    'fashion',
  ];

  return (
    <div>
      <div className="flex items-center justify-between mx-2 sm:mx-10 border-b-4 border-gray-200 px-2 sm:px-4 mb-2 sm:mb-5">
        {/* Sidebar and Menu */}
        <div>
          <button onClick={toggleSidebar} className="menuButton rounded" aria-label="Toggle Menu">
            Menu
          </button>
          {isSidebarOpen && (
            <div className="sidebar active">
              <div className="header">
              <div className="languageToggle space-x-3">
                <button className='p-2 rounded'>English</button>
                <button className='p-2 rounded'>हिन्दी</button>
              </div>
                <button onClick={toggleSidebar} className="closeButton rounded" aria-label="Close Menu">
                  Close
                </button>
              </div>
              <ul className="menu">
                {categories.map((category, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      
                      onCategoryChange(category); // Notify parent of category change
                      toggleSidebar();// Close sidebar
                    }}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {/* Logo */}
        <div>
          <a href="https://www.inshorts.com/">
            <img
              src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
              className="w-36 cursor-pointer"
              alt="Inshorts Logo"
            />
          </a>
        </div>
      </div>
      <div className="max-w-lg lg:max-w-5xl sm:mx-auto px-2 rounded  mb-2 sm:mb-5">
        <div className="bg-red-500 py-3 px-5 flex justify-evenly items-center space-x-4">
          <h1 className="text-white">
            For the best experience use <span className="font-semibold cursor-pointer"><a href="https://inshorts.com/news" target='_blank'>inshorts</a></span> app on your smartphone
          </h1>
          <div className="sm:flex justify-between sm:space-x-3 space-y-3 sm:space-y-0">
            <a href="https://www.inshorts.com/?shortlink=Website&pid=Website&af_xp=custom&source_caller=ui" target='_blank'><img
              className="cursor-pointer"
              src="https://assets.inshorts.com/website_assets/images/appstore.png"
              height="52"
              width="140"
              alt="inshorts"
            /></a>
            <a href="https://www.inshorts.com/?shortlink=Website&pid=Website&af_xp=custom&source_caller=ui" target='_blank'>
            <img
              className="cursor-pointer"
              src="https://assets.inshorts.com/website_assets/images/playstore.png"
              height="52"
              width="140"
              alt="inshorts"
            />
            </a>
          </div>
        </div>
      </div>
    

    </div>
  );
};

export default Header;
