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
      text: '^MMX IPC Mexico',
      align: 'left',
    },
    stroke: {
      width: 1.5,
    },
    yaxis: {
      title: {
        text: 'Precio',
      },
    },
    xaxis: {
      labels: {
        formatter: (value) => {
          return moment(new Date(value)).format('HH:mm:ss');
        },
      },
      type: 'datetime',
    },
    tooltip: {
      shared: false,
    },
  },
};

const convertDataToArray = (data) => {
  const newArray = [];
  data.map((item) => newArray.push([item.Fecha, new Intl.NumberFormat('de-DE').format(item.Precio)]));
  return newArray;
};

const getConfigChart = (data) => {
  const dataConverted = convertDataToArray(data);
  configChart.series[0].data = dataConverted;
  return configChart;
};

export default getConfigChart;
