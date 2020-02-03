import { useState, useEffect } from 'react';
import moment from 'moment';
import historicalIpcList from '../__mocks__/historicalIpcList';

const useInitialState = () => {
  const [historicalIpc, setHistoricalIpc] = useState({
    data: [],
    error: undefined,
  });
  const API = 'https://www.gbm.com.mx/Mercados/ObtenerDatosGrafico?empresa=IPC';
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setHistoricalIpc({
        ...historicalIpc,
        data: data.resultObj.filter((item) => moment(new Date(item.Fecha)).format('HH:mm:ss') >= '08:30:00'),
      }))
      .catch((error) => {
        console.log(error);
        setHistoricalIpc({
          data: historicalIpcList,
        });
      });
  }, []);
  return historicalIpc;
};

export default useInitialState;
