import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ChatBubble from './components/ChatBubble';
import JobCard from './components/JobCard';
import './App.css';

const App: React.FC = () => {
  // Sample data for job cards - in a real app this would come from an API
  const jobData = Array(9).fill({
    title: "Senior Full Stack Engineer (Frontend leaning) - Platform",
    company: "Foretop",
    location: "Mumbai, India",
    salary: "15,000/month",
    duration: "2 Months",
    matchPercentage: 49,
    postedTime: "1hr ago"
  });

  return (
    <div className="app-container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <Header />

        {/* Content area with job listings and chat */}
        <div className="content-wrapper">
          {/* Job filters and cards */}
          <div className="jobs-section">
            {/* Filter options */}
            <div className="filter-container">
              <div className="filter-pill">Intern/New Grad</div>
              <div className="filter-pill">Within US</div>
              <div className="filter-pill">Full-time</div>
              <div className="filter-pill">Onsite</div>
              <div className="filter-pill">Remote</div>
              <div className="filter-pill">Hybrid</div>
              <div className="filter-pill filter-button">
                <img src="https://dashboard.codeparrot.ai/api/image/Z_XLIIDi91IKZZwC/filter.png" alt="filter" className="filter-icon" />
                Filters
              </div>
            </div>

            {/* Job cards grid */}
            <div className="job-cards-grid">
              {jobData.map((job, index) => (
                <JobCard key={index} {...job} />
              ))}
            </div>
          </div>

          {/* Chat section */}
          <ChatBubble />
        </div>
      </div>
    </div>
  );
};

export default App;