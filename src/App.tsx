import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ChatBubble from './components/ChatBubble';
import JobCard from './components/JobCard';

const Layout: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100vh' }}>
      {/* Sidebar */}
      <div style={{ flexGrow: 0, width: '334px', height: '100vh' }}>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ flexGrow: 0, height: 'auto' }}>
          <Header />
        </div>

        {/* Job Cards */}
        <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', padding: '20px', overflowY: 'auto' }}>
          {[...Array(6)].map((_, index) => (
            <JobCard key={index} />
          ))}
        </div>

        {/* Chat Bubble */}
        <div style={{ flexGrow: 0, height: 'auto', padding: '20px', backgroundColor: '#f5f5f5', borderTop: '1px solid #e0e0e0' }}>
          <ChatBubble />
        </div>
      </div>
    </div>
  );
};

export default Layout;

