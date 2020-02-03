import moment from 'moment';

const getIndicatorsMarketIpc = (dataIpc) => {
  const opening = dataIpc[0];
  const current = dataIpc[dataIpc.length - 1];
  const maximum = dataIpc.reduce((prev, current) => {
    return (prev.Precio > current.Precio) ? prev : current;
  });
  const minimum = dataIpc.reduce((prev, current) => {
    return (prev.Precio < current.Precio) ? prev : current;
  });

  let closing = null;
  if (moment(new Date(current.Fecha)).format('HH:mm:ss') >= '15:15:00') {
    closing = current;
  }

  return {
    opening,
    maximum,
    minimum,
    current,
    closing,
  };
};

export default getIndicatorsMarketIpc;
