import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Chart from 'react-apexcharts';
import getConfigChart from '../utils/getConfigChart';
import '../assets/styles/IndexGraph.scss';

const IndexGraph = (props) => {
  const { historicalIpcList } = props;
  const configChart = getConfigChart(historicalIpcList);
  const [timeSeriesChart, setTimeSeriesChart] = useState(configChart);

  useEffect(() => {
    setTimeSeriesChart(getConfigChart(historicalIpcList));
  }, [historicalIpcList]);

  return (
    <section className='index--graph'>
      <div className='graph--header'>
        <div className='graph--date'>January 29 2020</div>
        <div className='graph--current_value'>48.369 <span>+0.11%</span></div>
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
  };
};

export default connect(mapStateToProps, null)(IndexGraph);
