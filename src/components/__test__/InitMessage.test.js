import React from 'react';
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/ProviderMocks';
import InitMessage from '../InitMessage';

describe('InitMessage testing', () => {
  test('Match Snapshot', () => {
    const initMessage = create(
      <ProviderMock>
        <InitMessage />
      </ProviderMock>
    );
    expect(initMessage.toJSON()).toMatchSnapshot();
  });
});
