import { shallow } from 'enzyme';
import {
  WeatherItem,
  WeatherItemProps,
} from '../../../components/WeatherDisplay/WeatherItem';

const weatherItemProps: WeatherItemProps = {
  temp: 100,
};

describe('WeatherItem Tests', () => {
  test('should match Snapshot', () => {
    const wrapper = shallow(<WeatherItem {...weatherItemProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
