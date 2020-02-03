import React from 'react';
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/ProviderMocks';
import UserManagement from '../UserManagement';

describe('UserManagement testing', () => {
  test('Match Snapshot', () => {
    const userManagement = create(
      <ProviderMock>
        <UserManagement />
      </ProviderMock>
    );
    expect(userManagement.toJSON()).toMatchSnapshot();
  });
});
