import React from 'react';

interface JobCardProps {
  title?: string;
  company?: string;
  location?: string;
  salary?: string;
  duration?: string;
  matchPercentage?: number;
  postedTime?: string;
}

const JobCard: React.FC<JobCardProps> = ({
  title = "Senior Full Stack Engineer (Frontend leaning) - Platform",
  company = "Foretop",
  location = "Mumbai, India",
  salary = "15,000/month",
  duration = "2 Months",
  matchPercentage = 49,
  postedTime = "1hr ago"
}) => {
  return (
    <div style={{
      width: '100%',
      height: 'auto',
      backgroundColor: '#e2f2ff',
      borderRadius: '12px',
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      position: 'relative',
      boxSizing: 'border-box'
    }}>
      {/* Heart Icon */}
      <div style={{
        position: 'absolute',
        top: '16px',
        right: '16px',
        width: '32px',
        height: '32px',
        backgroundColor: '#fff',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
      }}>
        <img src="https://dashboard.codeparrot.ai/api/image/Z_XLIIDi91IKZZwC/heart.png" alt="heart" style={{ width: '20px', height: '20px' }} />
      </div>

      {/* Title Section */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h2 style={{
          margin: 0,
          fontFamily: 'Poppins, sans-serif',
          fontSize: '18px',
          fontWeight: 600,
          color: '#1A1A1A',
          paddingRight: '30px'
        }}>{title}</h2>
        <p style={{
          margin: 0,
          fontFamily: 'Poppins, sans-serif',
          fontSize: '14px',
          fontWeight: 600,
          color: '#696969'
        }}>{company}</p>
      </div>

      {/* Details Section */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img src="https://dashboard.codeparrot.ai/api/image/Z_XLIIDi91IKZZwC/mdi-ligh.png" alt="location" style={{ width: '16px', height: '16px' }} />
          <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', color: '#1A1A1A' }}>{location}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img src="https://dashboard.codeparrot.ai/api/image/Z_XLIIDi91IKZZwC/mdi-ligh-2.png" alt="salary" style={{ width: '16px', height: '16px' }} />
          <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', color: '#1A1A1A' }}>{salary}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img src="https://dashboard.codeparrot.ai/api/image/Z_XLIIDi91IKZZwC/mdi-ligh-3.png" alt="duration" style={{ width: '16px', height: '16px' }} />
          <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', color: '#1A1A1A' }}>{duration}</span>
        </div>
      </div>

      {/* Match Section */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto' }}>
        <div style={{ 
          width: '28px', 
          height: '28px', 
          borderRadius: '50%', 
          position: 'relative',
          background: `conic-gradient(#1A1A1A ${matchPercentage}%, #F5F5F5 ${matchPercentage}%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '8px',
            fontWeight: 600
          }}>{matchPercentage}%</div>
        </div>
        <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', color: '#1A1A1A' }}>Good Match</span>
      </div>

      {/* Posted Time */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginLeft: 'auto' }}>
        <img src="https://dashboard.codeparrot.ai/api/image/Z_XLIIDi91IKZZwC/group.png" alt="time" style={{ width: '12px', height: '12px' }} />
        <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', color: '#696969' }}>{postedTime}</span>
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: '12px' }}>
        <button style={{
          padding: '8px 16px',
          backgroundColor: '#fff',
          borderRadius: '16px',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          cursor: 'pointer',
          fontSize: '14px',
          fontFamily: 'Poppins, sans-serif'
        }}>
          <img src="https://dashboard.codeparrot.ai/api/image/Z_XLIIDi91IKZZwC/svg.png" alt="ask" style={{ width: '12px', height: '12px' }} />
          <span>Ask xzayogn</span>
        </button>
        <button style={{
          padding: '8px 24px',
          backgroundColor: '#3AAB63',
          borderRadius: '16px',
          border: 'none',
          color: '#fff',
          fontFamily: 'Poppins, sans-serif',
          fontSize: '14px',
          fontWeight: 500,
          cursor: 'pointer'
        }}>Apply</button>
      </div>
    </div>
  );
};

export default JobCard;