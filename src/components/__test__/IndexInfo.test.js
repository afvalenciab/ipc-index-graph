import React from 'react';
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/ProviderMocks';
import IndexInfo from '../IndexInfo';


describe('IndexInfo testing', () => {
  test('Match Snapshot', () => {
    const indexInfo = create(
      <ProviderMock>
        <IndexInfo />
      </ProviderMock>
    );
    expect(indexInfo.toJSON()).toMatchSnapshot();
  });
});
