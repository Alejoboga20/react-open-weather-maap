import { shallow } from 'enzyme';
import {
  InputButton,
  InputButtonProps,
} from '../../../components/common/InputButton';

const inputButtonProps: InputButtonProps = {
  label: 'test label',
  value: 'test balue',
  location: { latitude: 10, longitude: 10 },
  onClick: jest.fn(),
  disabled: false,
};

describe('InputButton Tests', () => {
  const wrapper = shallow(<InputButton {...inputButtonProps} />);

  test('should Match Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should have correct label', () => {
    const title = wrapper.find('button').text();

    expect(title).toBe(inputButtonProps.label);
  });

  test('should call onClick function', () => {
    wrapper.find('button').simulate('click');

    expect(inputButtonProps.onClick).toHaveBeenCalled();
  });
});
