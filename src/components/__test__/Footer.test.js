import React from 'react';
import { create } from 'react-test-renderer';
import Footer from '../Footer';
import Adapter from 'enzyme-adapter-react-16';
import { render, shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('Footer testing', () => {
  test('Match Snapshot', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });

  test('footer has 2 paragrah tags', () => {
    const footer = render(<Footer />);
    expect(footer.find('p')).toHaveLength(2);
  });

  test('Footer has class .footer', () => {
    const footer = shallow(<Footer />);
    const footerElm = footer.find('footer');
    expect(footerElm.hasClass('footer')).toBe(true);
  });
});