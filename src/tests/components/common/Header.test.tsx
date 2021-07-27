import React from 'react';
import { shallow } from 'enzyme';
import { Header, HeaderProps } from '../../../components/common/Header';

const headerProps: HeaderProps = {
  title: 'Test Title',
  subtitle: 'Test Subtitle',
};

describe('Header Tests', () => {
  const wrapper = shallow(<Header {...headerProps} />);

  test('should match Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should have correct h1 and h2', () => {
    const title = wrapper.find('h1').text();
    const subtitle = wrapper.find('h2').text();

    expect({ title, subtitle }).toEqual(headerProps);
  });
});
