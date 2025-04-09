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
                <img src="data:image/png;base64,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" alt="filter" className="filter-icon" />
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