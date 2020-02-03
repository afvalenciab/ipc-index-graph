import React from 'react';
import { create } from 'react-test-renderer';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProviderMock from '../../__mocks__/ProviderMocks';
import Register from '../Register';

configure({ adapter: new Adapter() });

describe('Register testing', () => {
  test('Match Snapshot', () => {
    const register = create(
      <ProviderMock>
        <Register />
      </ProviderMock>
    );
    expect(register.toJSON()).toMatchSnapshot();
  });

  test('Calls and execute preventDefault function onSubmit form', () => {
    const preventDefault = jest.fn();
    const register = mount(
      <ProviderMock>
        <Register />
      </ProviderMock>
    );
    register.find('form').simulate('submit', { preventDefault });
    expect(preventDefault).toHaveBeenCalledTimes(1);
    register.unmount();
  });
});
