import { setHistoricalIpcList, loginUser } from '../index';
import historicalIpcList from '../../__mocks__/historicalIpcList';

describe('Actions redux', () => {
  it('It Should create an action to set historical Ipc List', () => {
    const payload = historicalIpcList;
    const expected = {
      type: 'SET_HISTORICAL_IPC_LIST',
      payload,
    };
    expect(setHistoricalIpcList(payload)).toEqual(expected);
  });

  it('It Should create an action to login', () => {
    const payload = {
      _id: 1238797, 
      email: 'info@gmail.com',
      isAdmin: false,
      wrongPass: 0
    };
    const expected = {
      type: 'LOGIN_USER',
      payload,
    };
    expect(loginUser(payload)).toEqual(expected);
  });
});