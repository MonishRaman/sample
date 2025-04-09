import React from 'react';

const Header: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      padding: '20px',
      minWidth: '100%',
      height: 'auto',
      alignItems: 'center',
      borderBottom: '1px solid #e2e2e2',
      backgroundColor: '#fff'
    }}>
      {/* Left section - JOBS title */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
        alignItems: 'center'
      }}>
        <span style={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 700,
          fontSize: '32px',
          color: '#000000'
        }}>
          JOBS
        </span>
        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z_XLIIDi91IKZZwC/arr-subn.png"
          alt="arrow"
          style={{
            width: '20px',
            height: '20px',
            cursor: 'pointer'
          }}
        />
      </div>

      {/* Right section - Navigation buttons */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '20px',
        alignItems: 'center',
        marginLeft: '20px'
      }}>
        <button style={{
          padding: '8px 16px',
          background: '#e2f2ff',
          borderRadius: '20px',
          border: 'none',
          color: '#1a1a1a',
          fontSize: '14px',
          fontFamily: 'Poppins, sans-serif',
          cursor: 'pointer'
        }}>Recommended</button>

        <button style={{
          padding: '8px 16px',
          background: 'transparent',
          borderRadius: '20px',
          border: 'none',
          color: '#1a1a1a',
          fontSize: '14px',
          fontFamily: 'Poppins, sans-serif',
          cursor: 'pointer'
        }}>Liked</button>

        <button style={{
          padding: '8px 16px',
          background: 'transparent',
          borderRadius: '20px',
          border: 'none',
          color: '#1a1a1a',
          fontSize: '14px',
          fontFamily: 'Poppins, sans-serif',
          cursor: 'pointer'
        }}>Applied</button>
      </div>

      {/* User profile and dark mode toggle */}
      <div style={{
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center',
        gap: '15px'
      }}>
        <div style={{
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          border: '1px solid #1a1a1a',
          cursor: 'pointer'
        }}></div>
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          overflow: 'hidden',
          cursor: 'pointer'
        }}>
          <img 
            src="https://dashboard.codeparrot.ai/api/placeholder/40/40" 
            alt="User profile" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;