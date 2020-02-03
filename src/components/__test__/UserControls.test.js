import React from 'react';
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/ProviderMocks';
import UserControls from '../UserControls';

describe('UserControls testing', () => {
  test('Match Snapshot', () => {
    const userControls = create(
      <ProviderMock>
        <UserControls />
      </ProviderMock>
    );
    expect(userControls.toJSON()).toMatchSnapshot();
  });
});
