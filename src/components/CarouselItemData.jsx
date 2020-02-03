import React from 'react';
import '../assets/styles/CarouselItemData.scss';

const CarouselItemData = (props) => {
  const { nameCard, ipcValue } = props;
  const symbolPercentage = ipcValue ? ipcValue.Porcentaje >= 0 : false;

  return (
    <div className='carousel--item_data'>
      <h2>{nameCard}</h2>
      <div className='item--data'>
        <p className='price'>{ipcValue ? new Intl.NumberFormat('de-DE').format(ipcValue.Precio) : '-'}</p>
        {ipcValue && (
          <p className={`percentage ${symbolPercentage ? 'up' : 'down'}`}>
            {`${ipcValue.Porcentaje >= 0 ? '+' : ''}${ipcValue.Porcentaje}%`}
          </p>
        )}
      </div>
    </div>
  );
};

export default CarouselItemData;
