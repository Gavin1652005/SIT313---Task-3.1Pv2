import React from 'react';

const Banner = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '300px',        
        overflow: 'hidden',
        marginTop: '-14.5px',
      }}
    >
      <img
        src="/Banner.jpg.png"        
        alt="Banner"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',      
          display: 'block',
        }}
      />
    </div>
  );
};

export default Banner;
