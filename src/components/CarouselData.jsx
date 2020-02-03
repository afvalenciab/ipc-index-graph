import React from 'react';
import '../assets/styles/CarouselData.scss';

const CarouselData = ({ children }) => {
  return (
    <div className='carousel--data'>
      { children}
    </div>
  );
};

export default CarouselData;
