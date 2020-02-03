import React from 'react';
import { create } from 'react-test-renderer';
import IndexGraph from '../IndexGraph';
import ProviderMock from '../../__mocks__/ProviderMocks';

describe('IndexGraph testing', () => {
  test('Match Snapshot', () => {
    const indexGraph = create(
      <ProviderMock>
        <IndexGraph />
      </ProviderMock>
    );
    expect(indexGraph.toJSON()).toMatchSnapshot();
  });
});