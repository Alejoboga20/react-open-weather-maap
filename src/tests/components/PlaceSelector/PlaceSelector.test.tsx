import { shallow } from 'enzyme';
import {
  PlaceSelector,
  PlaceSelectorProps,
} from '../../../components/PlaceSelector/PlaceSelector';

const placeSelectorProps: PlaceSelectorProps = {
  inputButtons: [
    {
      label: 'Location Test',
      value: 'LT',
      location: { latitude: 10, longitude: 100 },
    },
  ],
  onClick: jest.fn(() => console.log('click')),
  blockButtons: false,
};

describe('Place Selector Tests', () => {
  const wrapper = shallow(<PlaceSelector {...placeSelectorProps} />);

  test('should Match Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should block buttons', () => {
    const wrapper = shallow(
      <PlaceSelector {...placeSelectorProps} blockButtons={true} />
    );

    const blockButton = wrapper.find('InputButton').prop('disabled');
    expect(blockButton).toBe(true);
  });

  test('should call onClick function', () => {
    wrapper.find('InputButton').simulate('click');
    expect(placeSelectorProps.onClick).toHaveBeenCalled();
  });
});
