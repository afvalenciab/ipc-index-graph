import React from 'react';
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/ProviderMocks';
import IpcInfo from '../IpcInfo';

describe('IpcInfo testing', () => {
  test('Match Snapshot', () => {
    const ipcInfo = create(
      <ProviderMock>
        <IpcInfo />
      </ProviderMock>
    );
    expect(ipcInfo.toJSON()).toMatchSnapshot();
  });
});
