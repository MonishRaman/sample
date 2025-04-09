import React from 'react';
import '../styles/HeaderStyles.css';

const Header: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      gap: '18px',
      padding: '20px',
      minWidth: '639px',
      height: 'auto',
      alignItems: 'center'
    }}>
      {/* Left section - JOBS title */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
        alignItems: 'center'
      }}>
        <span style={{
          fontFamily: 'Poppins',
          fontWeight: 700,
          fontSize: '40px',
          lineHeight: '49.15px',
          color: '#000000'
        }}>
          JOBS
        </span>
        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z_XLIIDi91IKZZwC/arr-subn.png"
          alt="arrow"
          style={{
            width: '24.57px',
            height: '24.57px',
            cursor: 'pointer'
          }}
        />
      </div>

      {/* Right section - Navigation buttons */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '28px',
        alignItems: 'center',
        marginLeft: 'auto'
      }}>
        <button className="header-btn">Recommended</button>

        <button className="header-btn">Liked</button>

        <button className="header-btn">Applied</button>
      </div>
    </div>
  );
};

export default Header;

