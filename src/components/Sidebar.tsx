import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div style={{
      width: '334px',
      height: '100vh',
      backgroundColor: '#e2f2ff',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '64px'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          fontFamily: 'Gloock',
          fontSize: '24px',
          letterSpacing: '2.88px',
          color: '#1a1a1a'
        }}>
          XZAYOGN
        </div>
        <div style={{
          width: '28px',
          height: '25px',
          border: '2px solid #1a1a1a'
        }}></div>
      </div>

      {/* Navigation Menu */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        {/* Upcoming */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '15px 20px',
          backgroundColor: '#fff',
          borderRadius: '16px',
          gap: '16px'
        }}>
          <span style={{
            fontFamily: 'Poppins',
            fontWeight: 600,
            fontSize: '17px',
            color: '#1a1a1a'
          }}>Upcoming</span>
          <img src="https://dashboard.codeparrot.ai/api/image/Z_XLIIDi91IKZZwC/bi-stars.png" alt="stars" style={{width: '20.4px', height: '20.4px'}} />
          <img src="https://dashboard.codeparrot.ai/api/image/Z_XLIIDi91IKZZwC/frame-25.png" alt="frame" style={{marginLeft: 'auto'}} />
        </div>

        {/* New Chat */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '15px 20px',
          backgroundColor: '#fff',
          borderRadius: '16px',
          gap: '16px'
        }}>
          <span style={{
            fontFamily: 'Poppins',
            fontWeight: 600,
            fontSize: '17px',
            color: '#1a1a1a'
          }}>New Chat</span>
          <img src="https://dashboard.codeparrot.ai/api/image/Z_XLIIDi91IKZZwC/bi-stars-2.png" alt="stars" style={{width: '20.4px', height: '20.4px'}} />
          <img src="https://dashboard.codeparrot.ai/api/image/Z_XLIIDi91IKZZwC/add-2.png" alt="add" style={{marginLeft: 'auto'}} />
        </div>

        {/* My Jobs */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '15px 20px',
          backgroundColor: '#1684d4',
          borderRadius: '16px',
          gap: '16px'
        }}>
          <span style={{
            fontFamily: 'Poppins',
            fontWeight: 600,
            fontSize: '17px',
            color: '#fff'
          }}>My Jobs</span>
          <img src="https://dashboard.codeparrot.ai/api/image/Z_XLIIDi91IKZZwC/bi-stars-3.png" alt="stars" style={{width: '20.4px', height: '20.4px'}} />
          <img src="https://dashboard.codeparrot.ai/api/image/Z_XLIIDi91IKZZwC/briefcas.png" alt="briefcase" style={{marginLeft: 'auto'}} />
        </div>

        {/* Market Place */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '15px 20px',
          backgroundColor: '#fff',
          borderRadius: '16px',
          gap: '16px'
        }}>
          <span style={{
            fontFamily: 'Poppins',
            fontWeight: 600,
            fontSize: '17px',
            color: '#1a1a1a'
          }}>Market Place</span>
          <img src="https://dashboard.codeparrot.ai/api/image/Z_XLIIDi91IKZZwC/bi-stars-4.png" alt="stars" style={{width: '20.4px', height: '20.4px'}} />
          <img src="https://dashboard.codeparrot.ai/api/image/Z_XLIIDi91IKZZwC/bag-hand.png" alt="bag" style={{marginLeft: 'auto'}} />
        </div>
      </div>

      {/* Chat History */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        <span style={{
          fontFamily: 'Poppins',
          fontSize: '17px',
          color: '#696969'
        }}>Today</span>
        <div style={{
          padding: '15px 20px',
          backgroundColor: '#fff',
          borderRadius: '16px'
        }}>
          <span style={{
            fontFamily: 'Poppins',
            fontSize: '17px',
            color: '#1a1a1a'
          }}>Some one line chat prompt...</span>
        </div>
      </div>

      {/* Chat History List */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        <span style={{
          fontFamily: 'Poppins',
          fontSize: '17px',
          color: '#696969'
        }}>Chat history</span>
        {[...Array(6)].map((_, index) => (
          <div key={index} style={{
            padding: '15px 20px',
            backgroundColor: '#fff',
            borderRadius: '16px'
          }}>
            <span style={{
              fontFamily: 'Poppins',
              fontSize: '17px',
              color: '#1a1a1a'
            }}>Some one line chat prompt...</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

