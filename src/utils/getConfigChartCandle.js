import moment from 'moment';
import getIndicatorMarketIpc from './getIndicatorMarketIpc';

export const initConfigChartCandle = {
  series: [
    {
      name: 'IPC Index',
      data: [],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: 'candlestick',
    },
    title: {
      text: '^MMX IPC Mexico - Gráfico de Velas',
      align: 'left'
    },
    tooltip: {
      enabled: true,
    },
    xaxis: {
      type: 'category',
      labels: {
        formatter: function(val) {
          return moment(val).format('HH:mm:00')
        }
      },
    },
    yaxis: {
      min: 0,
      max: 0,
      labels: {
        formatter: (val) => {
          return new Intl.NumberFormat('de-DE').format(val);
        }
      },
      tooltip: {
        enabled: true
      },
      title: {
        text: 'Precio',
      },
    }
  }
};

const getDataEveryThirtyMinutes = (data, time ) => {
  const arrayEveryThirtyMinutes = [];
  let arrayAux = [];
  let initHour = moment(new Date('1900/01/01 08:30:00'));
  let nextHour = moment(new Date('1900/01/01 08:30:00')).add(time, 'm');

  data.map((item, index) => {
    if ( moment(item.Fecha).format('HH:mm:ss') >= moment(initHour).format('HH:mm:ss') &&
      moment(item.Fecha).format('HH:mm:ss') < moment(nextHour).format('HH:mm:ss')) 
    {
      arrayAux.push(item);

      if( data.length === index + 1 ){
        arrayEveryThirtyMinutes.push(arrayAux);
      }
    } else {
      arrayEveryThirtyMinutes.push(arrayAux);
      arrayAux = [];
      initHour.add(time, 'm');
      nextHour.add(time, 'm');
      arrayAux.push(item);
    }
  });
  

  return arrayEveryThirtyMinutes;
};

const convertDataToCandleFormat = (data, time) => {
  const series = [];
  const dataEveryThirtyMinutes = getDataEveryThirtyMinutes(data, time);

  dataEveryThirtyMinutes.map((item) => {
    const infoItemObj = getIndicatorMarketIpc(item);
    const newPoint = {
      x: new Date(item[0].Fecha).getTime(),
      y: [infoItemObj.opening.Precio, infoItemObj.maximum.Precio, infoItemObj.minimum.Precio, infoItemObj.current.Precio]
    }
    series.push(newPoint);
  });

  return series;
};

export const getConfigChartCandle = (data, time) => {
  debugger;
  const dataConverted = convertDataToCandleFormat(data, time);
  initConfigChartCandle.series[0].data = dataConverted;
  return initConfigChartCandle;
};
