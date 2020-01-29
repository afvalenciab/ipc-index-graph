import React from 'react';
import CarouselData from './CarouselData';
import CarouselItemData from './CarouselItemData';
import '../assets/styles/IndexInfo.scss';

const IndexInfo = () => {
  return (
    <section className='index--info'>
      <CarouselData>
        <CarouselItemData />
        <CarouselItemData />
        <CarouselItemData />
        <CarouselItemData />
      </CarouselData>
    </section>
  );
};

export default IndexInfo;
