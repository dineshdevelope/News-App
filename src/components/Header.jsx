import React, { useState } from 'react';


const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar's visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="">
      {/* Top section with logo and menu button */}
      <div className="flex items-center justify-between mx-2 sm:mx-10 border mb-2 sm:mb-5 border-b-gray-200 px-2 sm:px-4 border-b-4 ">
        {/* Menu and Sidebar */}
        <div>
          {/* Menu Button */}
          <button onClick={toggleSidebar} className="menuButton rounded">
            Menu
          </button>

          {/* Sidebar */}
          <div className={`sidebar ${isSidebarOpen ? "active" : ""}`}>
            <div className="header">
              
              <div className="languageToggle space-x-3">
                <button className='p-2 rounded'>English</button>
                <button className='p-2 rounded'>हिन्दी</button>
              </div>
              <button onClick={toggleSidebar} className="closeButton rounded ">
                Close
              </button>
            </div>
            <ul className="menu">
              <li onClick={toggleSidebar}>India</li>
              <li onClick={toggleSidebar}>Business</li>
              <li onClick={toggleSidebar}>Politics</li>
              <li onClick={toggleSidebar}>Sports</li>
              <li onClick={toggleSidebar}>Technology</li>
              <li onClick={toggleSidebar}>Startups</li>
              <li onClick={toggleSidebar}>Entertainment</li>
              <li onClick={toggleSidebar}>Hatke</li>
              <li onClick={toggleSidebar}>International</li>
              <li onClick={toggleSidebar}>Automobile</li>
              <li onClick={toggleSidebar}>Science</li>
              <li onClick={toggleSidebar}>Travel</li>
              <li onClick={toggleSidebar}>Miscellaneous</li>
              <li onClick={toggleSidebar}>Fashion</li>
            </ul>
          </div>
        </div>

        {/* Logo */}
        <div>
          <a href="https://www.inshorts.com/">
          <img
            src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
            className="w-36 cursor-pointer"
            alt="Inshorts"
          />
          </a>
        </div>
        <hr  className=''/>
      </div>

      {/* Bottom section with app suggestion banner */}
      <div className="max-w-lg lg:max-w-5xl sm:mx-auto px-2 rounded  mb-2 sm:mb-5">
        <div className="bg-red-500 py-3 px-5 flex justify-evenly items-center space-x-4">
          <h1 className="text-white">
            For the best experience use <span className="font-semibold cursor-pointer">inshorts</span> app on your smartphone
          </h1>
          <div className="sm:flex justify-between sm:space-x-3 space-y-3 sm:space-y-0">
            <img
              className="cursor-pointer"
              src="https://assets.inshorts.com/website_assets/images/appstore.png"
              height="52"
              width="140"
              alt="inshorts"
            />
            <img
              className="cursor-pointer"
              src="https://assets.inshorts.com/website_assets/images/playstore.png"
              height="52"
              width="140"
              alt="inshorts"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
