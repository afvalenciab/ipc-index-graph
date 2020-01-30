import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Chart from 'react-apexcharts';
import moment from 'moment';
import getConfigChart from '../utils/getConfigChart';
import '../assets/styles/IndexGraph.scss';

const IndexGraph = (props) => {
  const { historicalIpcList, currentIpcValue } = props;
  const configChart = getConfigChart(historicalIpcList);
  const [timeSeriesChart, setTimeSeriesChart] = useState(configChart);
  const symbolPercentage = currentIpcValue.Porcentaje >= 0;

  useEffect(() => {
    setTimeSeriesChart(getConfigChart(historicalIpcList));
  }, [historicalIpcList]);

  return (
    <section className='index--graph'>
      <div className='graph--header'>
        <div className='graph--date'>{moment(new Date(currentIpcValue.Fecha)).format('LL')}</div>
        <div className='graph--current_value'>
          <span className='current_text'>Valor Actual: </span>
          {new Intl.NumberFormat('de-DE').format(currentIpcValue.Precio)}
          <span className={`current_per ${symbolPercentage ? 'up' : 'down'}`}>
            {`(${symbolPercentage ? '+' : ''} ${currentIpcValue.Porcentaje})`}
          </span>
        </div>
      </div>
      <div className='graph--history'>
        <div className='graph--timeseries'>
          <Chart
            options={timeSeriesChart.options}
            series={timeSeriesChart.series}
            width='100%'
            height='100%'
          />
        </div>
        <div className='graph--candlestick' />
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    historicalIpcList: state.historicalIpcList,
    currentIpcValue: state.currentIpcValue,
  };
};

export default connect(mapStateToProps, null)(IndexGraph);
