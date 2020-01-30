import moment from 'moment';

const configChart = {
  series: [
    {
      name: 'IPC Index',
      data: [],
    },
  ],
  options: {
    chart: {
      type: 'area',
      stacked: false,
      height: 350,
      toolbar: {
        autoSelected: 'zoom',
      },
      animations: {
        enable: true,
        easing: 'linear',
        speed: 300,
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    title: {
      text: 'IPC Index',
      align: 'left',
    },
    stroke: {
      width: 1.5,
    },
    yaxis: {
      title: {
        text: 'Price',
      },
    },
    xaxis: {
      labels: {
        rotate: -35,
        rotateAlways: true,
        formatter: (value) => {
          return moment(new Date(value)).format('MMM-DD-YYYY HH:mm:ss');
        },
      },
      type: 'datetime',
    },
    tooltip: {
      shared: false,
    },
  },
};

const formatNummber = (number) => {
  let num = number;
  num = num.toString().replace(/\$|\,/g, '');

  const sign = (num == (num = Math.abs(num)));
  num = Math.floor(num * 100 + 0.50000000001);
  let cents = num % 100;
  num = Math.floor(num / 100).toString();
  if (cents < 10) {
    cents = `0${cents}`;
  }

  for (let i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
    num = `${num.substring(0, num.length - (4 * i + 3))}.${num.substring(num.length - (4 * i + 3))}`;
  }
  return (`${((sign) ? '' : '-') + num},${cents}`);
};

const convertDataToArray = (data) => {
  const newArray = [];
  data.map((item) => (newArray.push([item.Fecha, formatNummber(item.Precio)])));
  return newArray;
};

const getConfigChart = (data) => {
  const dataConverted = convertDataToArray(data);
  configChart.series[0].data = dataConverted;
  return configChart;
};

export default getConfigChart;
