// FixedIcon.js
import React from 'react';
import court_img from '../../assets/support-icon.png'

const FixedIcon = () => {
    const imageContainerStyle = {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '60px', // Adjust the size as needed
        height: '60px', // Adjust the size as needed
        borderRadius: '50%',
        overflow: 'hidden',
        backgroundColor: "red" ,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Optional: add a shadow
        cursor: 'pointer',
      };
    
      const imageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      };

      return (
        <div style={imageContainerStyle}>
          <img
            src={court_img} // Replace with your image path
            alt="Fixed Icon"
            style={imageStyle}
          />
        </div>
      );
    };

export default FixedIcon;

