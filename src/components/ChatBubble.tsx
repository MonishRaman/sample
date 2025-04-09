import React from 'react';

interface ChatBubbleProps {
  message?: string;
  logo?: string;
  username?: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({
  message = "Which job you want to ask xzayogn about?",
  logo = "https://dashboard.codeparrot.ai/api/image/Z_XLIIDi91IKZZwC/logo.png",
  username = "xzayogn."
}) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
      width: '100%',
      maxWidth: '365px',
      height: 'auto',
      padding: '20px'
    }}>
      {/* Header with logo and username */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '12px',
        alignItems: 'center',
        height: '60px'
      }}>
        <img 
          src={logo}
          alt="Logo"
          style={{
            width: '60px',
            height: '60px',
            objectFit: 'contain'
          }}
        />
        <span style={{
          fontFamily: 'Poppins',
          fontSize: '40px',
          fontWeight: 400,
          color: '#1A1A1A',
          textAlign: 'center'
        }}>
          {username}
        </span>
      </div>

      {/* Chat bubble */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        padding: '21px 25px',
        background: '#E2F2FF',
        width: '100%',
        minHeight: '94px',
        boxSizing: 'border-box',
        borderRadius: '8px'
      }}>
        <p style={{
          margin: 0,
          fontFamily: 'Poppins',
          fontSize: '17px',
          fontWeight: 400,
          color: '#1A1A1A',
          width: '100%'
        }}>
          {message}
        </p>
      </div>
    </div>
  );
};

export default ChatBubble;
