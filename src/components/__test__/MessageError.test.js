import React from 'react';
import { create } from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { render, configure } from 'enzyme';
import MessageError from '../MessageError';

configure({ adapter: new Adapter() });

describe('MessageError testing', () => {
  test('Match Snapshot', () => {
    const messageError = create(<MessageError />);
    expect(messageError.toJSON()).toMatchSnapshot();
  });

  test('MessageError has 1 img tag', () => {
    const messageError = render(<MessageError />);
    expect(messageError.find('img')).toHaveLength(1);
  });
});