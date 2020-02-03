import React from 'react';
import { create } from 'react-test-renderer';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProviderMock from '../../__mocks__/ProviderMocks';
import Login from '../Login';

configure({ adapter: new Adapter() });

describe('Login testing', () => {
  test('Match Snapshot', () => {
    const login = create(
      <ProviderMock>
        <Login />
      </ProviderMock>
    );
    expect(login.toJSON()).toMatchSnapshot();
  });

  test('Calls and execute preventDefault function onSubmit form', () => {
    const preventDefault = jest.fn();
    const login = mount(
      <ProviderMock>
        <Login />
      </ProviderMock>
    );
    login.find('form').simulate('submit', { preventDefault });
    expect(preventDefault).toHaveBeenCalledTimes(1);
    login.unmount();
  });
});
