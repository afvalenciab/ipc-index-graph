import { useState, useEffect } from 'react';

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
        data: data.resultObj,
      }))
      .catch((error) => setHistoricalIpc({
        ...historicalIpc,
        error,
      }));
  }, []);
  return historicalIpc;
};

export default useInitialState;
