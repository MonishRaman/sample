import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div style={{
      width: '322px',
      height: '100vh',
      backgroundColor: '#e2f2ff',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '30px',
      boxSizing: 'border-box',
      borderRight: '1px solid #e2e2e2'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          fontFamily: 'sans-serif',
          fontSize: '24px',
          letterSpacing: '1px',
          color: '#1a1a1a',
          fontWeight: '600'
        }}>
          XZAYOGN
        </div>
        <div style={{
          width: '24px',
          height: '24px',
          border: '1px solid #1a1a1a',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}></div>
      </div>

      {/* Navigation Menu */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
        {/* Upcoming */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '10px 14px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          gap: '10px',
          cursor: 'pointer'
        }}>
          <span style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
            fontSize: '14px',
            color: '#1a1a1a'
          }}>Upcoming</span>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: '6px' }}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z_XLIIDi91IKZZwC/bi-stars.png" alt="stars" style={{width: '16px', height: '16px'}} />
            <img src="https://dashboard.codeparrot.ai/api/image/Z_XLIIDi91IKZZwC/frame-25.png" alt="frame" style={{width: '16px', height: '16px'}} />
          </div>
        </div>

        {/* New Chat */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '10px 14px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          gap: '10px',
          cursor: 'pointer'
        }}>
          <span style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
            fontSize: '14px',
            color: '#1a1a1a'
          }}>New Chat</span>
          <img src="https://dashboard.codeparrot.ai/api/image/Z_XLIIDi91IKZZwC/add-2.png" alt="add" style={{marginLeft: 'auto', width: '16px', height: '16px'}} />
        </div>

        {/* My Jobs */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '10px 14px',
          backgroundColor: '#1684d4',
          borderRadius: '10px',
          gap: '10px',
          cursor: 'pointer'
        }}>
          <span style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
            fontSize: '14px',
            color: '#fff'
          }}>My Jobs</span>
          <img src="https://dashboard.codeparrot.ai/api/image/Z_XLIIDi91IKZZwC/briefcas.png" alt="briefcase" style={{marginLeft: 'auto', width: '16px', height: '16px'}} />
        </div>

        {/* Market Place */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '10px 14px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          gap: '10px',
          cursor: 'pointer'
        }}>
          <span style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
            fontSize: '14px',
            color: '#1a1a1a'
          }}>Market Place</span>
          <img src="https://dashboard.codeparrot.ai/api/image/Z_XLIIDi91IKZZwC/bag-hand.png" alt="bag" style={{marginLeft: 'auto', width: '16px', height: '16px'}} />
        </div>
      </div>

      {/* Chat History */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
        <span style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: '14px',
          color: '#696969'
        }}>Today</span>
        <div style={{
          padding: '10px 14px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          cursor: 'pointer'
        }}>
          <span style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '14px',
            color: '#1a1a1a'
          }}>Some one line chat prompt...</span>
        </div>
      </div>

      {/* Chat History List */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        overflow: 'auto'
      }}>
        <span style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: '14px',
          color: '#696969'
        }}>Chat history</span>
        {[...Array(5)].map((_, index) => (
          <div key={index} style={{
            padding: '10px 14px',
            backgroundColor: '#fff',
            borderRadius: '10px',
            cursor: 'pointer'
          }}>
            <span style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '14px',
              color: '#1a1a1a'
            }}>Some one line chat prompt...</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;