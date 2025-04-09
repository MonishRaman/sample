import React from 'react';

interface ChatBubbleProps {
  message?: string;
  logo?: string;
  username?: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({
  message = "Which job you want to ask xzayogn about?",
  logo = "/api/placeholder/60/60",
  username = "xzayogn."
}) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      width: '300px',
      height: '100vh',
      padding: '20px',
      borderLeft: '1px solid #e2e2e2',
      backgroundColor: '#fff'
    }}>
      {/* Header with logo and username */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '12px',
        alignItems: 'center'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          overflow: 'hidden',
          backgroundColor: '#000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <span style={{ color: '#fff', fontWeight: 'bold', fontSize: '18px' }}>X</span>
        </div>
        <span style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: '24px',
          fontWeight: 400,
          color: '#1A1A1A'
        }}>
          {username}
        </span>
      </div>

      {/* Chat bubble */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        padding: '16px',
        background: '#E2F2FF',
        borderRadius: '8px'
      }}>
        <p style={{
          margin: 0,
          fontFamily: 'Poppins, sans-serif',
          fontSize: '14px',
          fontWeight: 400,
          color: '#1A1A1A'
        }}>
          {message}
        </p>
      </div>

      {/* Input field */}
      <div style={{
        marginTop: 'auto',
        width: '100%',
        position: 'relative'
      }}>
        <input 
          type="text" 
          placeholder="Message xzayogn..." 
          style={{
            width: '100%',
            padding: '12px 40px 12px 16px',
            borderRadius: '24px',
            border: '1px solid #e2e2e2',
            fontSize: '14px',
            fontFamily: 'Poppins, sans-serif',
            outline: 'none'
          }}
        />
        <div style={{
          position: 'absolute',
          right: '12px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          backgroundColor: '#e2e2e2',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}>
          <img 
            src="https://dashboard.codeparrot.ai/api/image/Z_XLIIDi91IKZZwC/arrow-up.png" 
            alt="Send"
            style={{ width: '12px', height: '12px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;