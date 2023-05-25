import React, { useState } from 'react';
import './About.css'; // Import the CSS file for styling
import NewsList from '../components/NewsList';

const About = () => {
  const [activeTab, setActiveTab] = useState('me');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="about-container">
      <div className="sidebar">
        <h2>Sidebar</h2>
        {/* Sidebar content */}
      </div>
      <div className="content">
        <div className="search-bar">
          {/* Search bar component */}
          <input type="text" placeholder="Search" />
          {/* Search button and additional functionality */}
        </div>
        <div className="main-content">
          <h1>About Page</h1>
          <p>
            This is a description or introduction paragraph about the page.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            ullamcorper enim nec ligula blandit, at fringilla justo accumsan.
            Integer bibendum tortor sit amet varius sagittis.
          </p>
          <div className="tabs">
            <button
              className={activeTab === 'me' ? 'active' : ''}
              onClick={() => handleTabChange('me')}
            >
              Me
            </button>
            <button
              className={activeTab === 'explore' ? 'active' : ''}
              onClick={() => handleTabChange('explore')}
            >
              Explore
            </button>
          </div>
          {/* Content based on active tab */}
          {activeTab === 'me' && <div><NewsList />  </div>}
          {activeTab === 'explore' && <div>Content for 'Explore' tab</div>}
        </div>
      </div>
    </div>
  );
};

export default About;