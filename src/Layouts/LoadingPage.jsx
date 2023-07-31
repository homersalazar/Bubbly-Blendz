import React from 'react';
import backgroundImage from '../assets/favicon.jpg';

const LoadingPage = () => {
  return (
    <div
      className='h-screen flex justify-center items-center'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
      }}
    />
  );
};

export default LoadingPage;
