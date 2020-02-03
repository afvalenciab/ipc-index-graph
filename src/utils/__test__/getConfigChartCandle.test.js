import historicalIpcList from '../../__mocks__/historicalIpcList';
import { getConfigChartCandle } from '../getConfigChartCandle';

describe('getConfigChartCandle function testing', () => {
  it('It should return a config element to create a candle graph', () => {
    const expected = {
      series: [
        {
          name: 'IPC Index',
          data:
            [
              { x: 1580481001320, y: [44759.9, 44759.9, 44748.38, 44748.38] },
              { x: 1580481063113, y: [44784.67, 44816.62, 44784.67, 44816.62] },
              { x: 1580481125060, y: [44806.08, 44806.08, 44786.33, 44786.33] },
              { x: 1580481187063, y: [44796.53, 44821.26, 44796.53, 44821.26] },
              { x: 1580481249040, y: [44798.83, 44804.7, 44798.83, 44804.7] },
              { x: 1580481311050, y: [44735.21, 44735.21, 44719.23, 44719.23] }
            ]
        }
      ],
      options: {
      },
    };

    const configResult = getConfigChartCandle(
      [
        historicalIpcList[0],
        historicalIpcList[1],
        historicalIpcList[2],
        historicalIpcList[3],
        historicalIpcList[4],
        historicalIpcList[5],
        historicalIpcList[6],
        historicalIpcList[7],
        historicalIpcList[8],
        historicalIpcList[9],
        historicalIpcList[10],
        historicalIpcList[11]
      ], 1);
      
    expect(configResult.series).toEqual(expected.series);
  });
});