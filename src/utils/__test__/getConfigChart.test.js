import historicalIpcList from '../../__mocks__/historicalIpcList';
import { getConfigChart } from '../getConfigChart';

describe('getConfigChart function testing', () => {
  it('It should return a config element to create a graph', () => {
    const expected = {
      series: [
        {
          name: 'IPC Index',
          data:
            [
              ['2020-01-31T08:30:01.32-06:00', '44,759.9'],
              ['2020-01-31T08:30:32.417-06:00', '44,748.38'],
              ['2020-01-31T08:31:03.113-06:00', '44,784.67']
            ]
        }
      ],
      options: {
      },
    };

    const configResult = getConfigChart([historicalIpcList[0], historicalIpcList[1], historicalIpcList[2]]);
    expect(configResult.series).toEqual(expected.series);
  });
});