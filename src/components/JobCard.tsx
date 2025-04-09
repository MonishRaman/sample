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
      maxWidth: '354px',
      height: 'auto',
      backgroundColor: '#e2f2ff',
      borderRadius: '12px',
      padding: '21px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      position: 'relative',
      margin: '10px',
      boxSizing: 'border-box'
    }}>
      {/* Heart Icon */}
      <div style={{
        position: 'absolute',
        top: '21px',
        right: '21px',
        width: '38px',
        height: '38px',
        backgroundColor: '#fff',
        borderRadius: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
      }}>
        <img src="https://dashboard.codeparrot.ai/api/image/Z_XLIIDi91IKZZwC/heart.png" alt="heart" style={{ width: '28px', height: '28px' }} />
      </div>

      {/* Title Section */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
        <h1 style={{
          margin: 0,
          fontFamily: 'Poppins',
          fontSize: '21px',
          fontWeight: 700,
          color: '#1A1A1A',
          width: '100%'
        }}>{title}</h1>
        <p style={{
          margin: 0,
          fontFamily: 'Poppins',
          fontSize: '14px',
          fontWeight: 700,
          color: '#696969'
        }}>{company}</p>
      </div>

      {/* Details Section */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
          <img src="https://dashboard.codeparrot.ai/api/image/Z_XLIIDi91IKZZwC/mdi-ligh.png" alt="location" style={{ width: '19px', height: '19px' }} />
          <span style={{ marginLeft: '21px', fontFamily: 'Poppins', fontSize: '17px', color: '#1A1A1A' }}>{location}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
          <img src="https://dashboard.codeparrot.ai/api/image/Z_XLIIDi91IKZZwC/mdi-ligh-2.png" alt="salary" style={{ width: '19px', height: '19px' }} />
          <span style={{ marginLeft: '21px', fontFamily: 'Poppins', fontSize: '17px', color: '#1A1A1A' }}>{salary}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
          <img src="https://dashboard.codeparrot.ai/api/image/Z_XLIIDi91IKZZwC/mdi-ligh-3.png" alt="duration" style={{ width: '19px', height: '26px' }} />
          <span style={{ marginLeft: '21px', fontFamily: 'Poppins', fontSize: '17px', color: '#1A1A1A' }}>{duration}</span>
        </div>
      </div>

      {/* Match Section */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginLeft: 'auto' }}>
        <div style={{ width: '32px', height: '32px', position: 'relative' }}>
          <div style={{ 
            width: '32px', 
            height: '32px', 
            borderRadius: '50%', 
            background: `conic-gradient(#1A1A1A ${matchPercentage}%, #F5F5F5 ${matchPercentage}%)`
          }} />
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontFamily: 'Poppins',
            fontSize: '8.89px',
            fontWeight: 600,
            color: '#1A1A1A'
          }}>{matchPercentage}%</div>
        </div>
        <span style={{ fontFamily: 'Poppins', fontSize: '17px', color: '#1A1A1A' }}>Good Match</span>
      </div>

      {/* Posted Time */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginLeft: 'auto' }}>
        <span style={{ fontFamily: 'Poppins', fontSize: '14px', color: '#696969' }}>{postedTime}</span>
        <img src="https://dashboard.codeparrot.ai/api/image/Z_XLIIDi91IKZZwC/group.png" alt="time" style={{ width: '15px', height: '15px' }} />
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: '24px' }}>
        <button style={{
          padding: '12px 16px',
          backgroundColor: '#fff',
          borderRadius: '18px',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          cursor: 'pointer'
        }}>
          <img src="https://dashboard.codeparrot.ai/api/image/Z_XLIIDi91IKZZwC/svg.png" alt="ask" style={{ width: '13px', height: '13px' }} />
          <span style={{ fontFamily: 'Poppins', fontSize: '17px', fontWeight: 500, color: '#1A1A1A' }}>Ask xzyogn</span>
        </button>
        <button style={{
          padding: '12px 43px',
          backgroundColor: '#3AAB63',
          borderRadius: '17px',
          border: 'none',
          color: '#fff',
          fontFamily: 'Poppins',
          fontSize: '20px',
          fontWeight: 500,
          cursor: 'pointer'
        }}>Apply</button>
      </div>
    </div>
  );
};

export default JobCard;

