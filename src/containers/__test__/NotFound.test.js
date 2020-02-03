import React from 'react';
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/ProviderMocks';
import NotFound from '../NotFound';

describe('NotFound testing', () => {
  test('Match Snapshot', () => {
    const notFound = create(
      <ProviderMock>
        <NotFound />
      </ProviderMock>
    );
    expect(notFound.toJSON()).toMatchSnapshot();
  });
});
