import React from 'react';

const MobileMenu = ({ isOpen, onClose, darkMode }) => {
  return (
    <div className={`mobile-menu ${isOpen ? 'open' : ''} ${darkMode ? 'dark' : ''}`} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      backgroundColor: darkMode ? '#000' : '#fff',
      padding: '2rem',
      display: isOpen ? 'block' : 'none',
      zIndex: 1000
    }}>
      <button 
        onClick={onClose}
        style={{
          padding: '0.5rem',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        <i 
          className="fa-solid fa-x" 
          style={{ 
            color: darkMode ? '#ffffff' : '#000000',
            fontSize: '1.5rem'
          }} 
        />
      </button>
      <nav style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 6rem)', // Full height minus padding and close button
        gap: '2rem'
      }}>
        <a 
          href="#" 
          style={{
            color: darkMode ? '#fff' : '#000',
            textDecoration: 'none',
            fontSize: '1.5rem',
            textAlign: 'center'
          }}
        >
          Features
        </a>
        <a 
          href="/contact" 
          onClick={onClose}
          style={{
            color: darkMode ? '#fff' : '#000',
            textDecoration: 'none',
            fontSize: '1.5rem',
            textAlign: 'center'
          }}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};

export default MobileMenu;