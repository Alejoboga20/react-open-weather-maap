import { mount } from 'enzyme';
import { App } from '../App';

describe('App Tests', () => {
  const wrapper = mount(<App />);

  test('should Match Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should display 5 input Buttons', () => {
    expect(wrapper.find('button').length).toBe(5);
  });
});
