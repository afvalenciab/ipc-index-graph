import React from 'react';
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/ProviderMocks';
import UserItem from '../UserItem';

describe('UserItem testing', () => {
  test('Match Snapshot', () => {
    const userItem = create(
      <ProviderMock>
        <UserItem />
      </ProviderMock>
    );
    expect(userItem.toJSON()).toMatchSnapshot();
  });
});
