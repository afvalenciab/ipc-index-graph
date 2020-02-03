import React from 'react';
import { create } from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import Loading from '../Loading';

configure({ adapter: new Adapter() });

describe('Loading testing', () => {
  test('Match Snapshot', () => {
    const loading = create(<Loading />);
    expect(loading.toJSON()).toMatchSnapshot();
  });
});