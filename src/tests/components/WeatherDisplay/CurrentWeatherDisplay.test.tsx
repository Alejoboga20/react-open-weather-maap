import { shallow } from 'enzyme';
import { CurrentWeatherDisplay } from '../../../components/WeatherDisplay/CurrentWeatherDisplay';

const labelContent = 'It is 10 degress in the city';
const labelError = 'Please Ensure your location service is working';

describe('CurrentWeatherDisplay Tests', () => {
  const wrapper = shallow(<CurrentWeatherDisplay temperature={10} />);

  test('should match Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should show label with temperature', () => {
    expect(wrapper.find('Label').prop('labelContent')).toBe(labelContent);
  });

  test('should show label with error', () => {
    const wrapper = shallow(<CurrentWeatherDisplay />);
    expect(wrapper.find('Label').prop('labelContent')).toBe(labelError);
  });
});
