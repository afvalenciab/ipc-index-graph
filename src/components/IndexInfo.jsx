import React from 'react';
import { connect } from 'react-redux';
import CarouselData from './CarouselData';
import CarouselItemData from './CarouselItemData';
import '../assets/styles/IndexInfo.scss';

const IndexInfo = (props) => {
  const {
    openingIpcValue,
    maximumIpcValue,
    minimumIpcValue,
    closingIpcValue,
  } = props;
  return (
    <section className='index--info'>
      <CarouselData>
        <CarouselItemData nameCard='Apertura' ipcValue={openingIpcValue} />
        <CarouselItemData nameCard='Máximo' ipcValue={maximumIpcValue} />
        <CarouselItemData nameCard='Mínimo' ipcValue={minimumIpcValue} />
        <CarouselItemData nameCard='Cierre' ipcValue={closingIpcValue} />
      </CarouselData>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    openingIpcValue: state.openingIpcValue,
    maximumIpcValue: state.maximumIpcValue,
    minimumIpcValue: state.minimumIpcValue,
    closingIpcValue: state.closingIpcValue,
  };
};

export default connect(mapStateToProps, null)(IndexInfo);
