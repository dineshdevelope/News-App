import React, { useState } from "react";


const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
    <div>
      {/* Menu Button */}
      <button onClick={toggleSidebar} className="menuButton">
        Menu
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "active" : ""}`}>
        <div className="header">
          <button onClick={toggleSidebar} className="closeButton">
            Close
          </button>
          <div className="languageToggle space-x-3">
            <button>English</button>
            <button>हिन्दी</button>
          </div>
        </div>
        <ul className="menu">
          <li>India</li>
          <li>Business</li>
          <li>Politics</li>
          <li>Sports</li>
          <li>Technology</li>
          <li>Startups</li>
          <li>Entertainment</li>
          <li>Hatke</li>
          <li>International</li>
          <li>Automobile</li>
          <li>Science</li>
          <li>Travel</li>
          <li>Miscellaneous</li>
          <li>Fashion</li>
        </ul>
      </div>
    </div>
   </div>
  );
};

export default Sidebar;
