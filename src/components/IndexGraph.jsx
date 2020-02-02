import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Chart from 'react-apexcharts';
import moment from 'moment';
import {getConfigChart, initConfigChart} from '../utils/getConfigChart';
import {getConfigChartCandle, initConfigChartCandle} from '../utils/getConfigChartCandle';
import areaIcon from '../assets/static/stats-dots.svg';
import candleIcon from '../assets/static/candlestick-chart.svg';
import '../assets/styles/IndexGraph.scss';

const IndexGraph = (props) => {
  const { historicalIpcList, currentIpcValue, maximumIpcValue, minimumIpcValue } = props;
  const symbolPercentage = currentIpcValue.Porcentaje >= 0;
  moment.locale('es');

  const [timeSeriesChart, setTimeSeriesChart] = useState({
    area: initConfigChart,
    candle: initConfigChartCandle
  });

  const [showGraph, setShowGraph] = useState({
    area: true,
    candle: false
  });

  const [timeGraphCandle, setTimeGraphCandle] = useState({
    five: false,
    fifteen: true,
    thirty: false,
    hour: false
  });

  const handleClickArea = () => {
    setShowGraph({
      area: true,
      candle: false
    });
  };

  const handleCliclCandle = () => {
    setShowGraph({
      area: false,
      candle: true
    });
  };

  const handleChangeTimeCandle = (event) => {
    setShowGraph({
      area: false,
      candle: false
    });

    const time = Number(event.target.id);
    setTimeGraphCandle({
      five: time === 5? true : false,
      fifteen: time === 15? true : false,
      thirty: time === 30? true : false,
      hour: time === 60? true : false
    });

    setTimeSeriesChart({
      ...timeSeriesChart,
      candle: getConfigChartCandle(historicalIpcList, time)
    });
    
    setTimeout(() => {
      setShowGraph({
        area: false,
        candle: true
      });
    }, 0);
  };

  useEffect(() => {
    debugger;
    const configArea = getConfigChart(historicalIpcList);
    const configCandle = getConfigChartCandle(historicalIpcList, 15);

    configCandle.options.yaxis.min = minimumIpcValue.Precio;
    configCandle.options.yaxis.max = maximumIpcValue.Precio;

    setTimeSeriesChart({
      area: configArea,
      candle: configCandle
    });
  },[]);

  return (
    <section className='index--graph'>
      <div className='graph--header'>
        <div className='graph--date'>{moment(new Date(currentIpcValue.Fecha)).format('LL')}</div>
        <div className='graph--current_value'>
          <span className='current_text'>Valor Actual: </span>
          {new Intl.NumberFormat('de-DE').format(currentIpcValue.Precio)}
          <span className={`current_per ${symbolPercentage ? 'up' : 'down'}`}>
            {`(${symbolPercentage ? '+' : ''} ${currentIpcValue.Porcentaje}%)`}
          </span>
        </div>
        <div className='graph--options'>
          <figure className={`graph--area ${showGraph.area ? 'isActive' : ''}`} onClick={handleClickArea}>
            <img src={areaIcon} alt=""/>
          </figure>
          <figure className={`graph--candle ${showGraph.candle ? 'isActive' : ''}`} onClick={handleCliclCandle}>
            <img src={candleIcon} alt=""/>
          </figure>
          {showGraph.candle && (
            <div className='graph--candle_options'>
              <p id='5' className={`candle__min ${timeGraphCandle.five ? 'isActive' : ''}`} onClick={handleChangeTimeCandle}>5</p>
              <p id='15' className={`candle__min ${timeGraphCandle.fifteen ? 'isActive' : ''}`} onClick={handleChangeTimeCandle}>15</p>
              <p id='30' className={`candle__min ${timeGraphCandle.thirty ? 'isActive' : ''}`} onClick={handleChangeTimeCandle}>30</p>
              <p id='60' className={`candle__min ${timeGraphCandle.hour ? 'isActive' : ''}`} onClick={handleChangeTimeCandle}>60</p>
            </div>
          )}
        </div>
      </div>
      <div className='graph--history'>
        <div className='graph--timeseries'>
          {showGraph.area && (
            <Chart
              options={timeSeriesChart.area.options}
              series={timeSeriesChart.area.series}
              width='100%'
              height='100%'
            />
          )}

          {showGraph.candle && (
            <Chart
              options={timeSeriesChart.candle.options}
              series={timeSeriesChart.candle.series}
              width='100%'
              height='100%'
              type="candlestick"
            />
          )}
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
    maximumIpcValue: state.maximumIpcValue,
    minimumIpcValue: state.minimumIpcValue,
  };
};

export default connect(mapStateToProps, null)(IndexGraph);
