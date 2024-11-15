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
    </div>
  );
};

export default Header;
