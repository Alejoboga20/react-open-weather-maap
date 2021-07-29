import { shallow } from 'enzyme';
import {
  WeatherDisplay,
  WeatherDisplayProps,
} from '../../../components/WeatherDisplay/WeatherDisplay';
import { Description, Main } from '../../../interfaces/WeatherResponse';

const weatherDisplayProps: WeatherDisplayProps = {
  dailyTemp: [
    {
      dt: 10,
      sunrise: 10,
      sunset: 10,
      moonrise: 10,
      moonset: 10,
      moon_phase: 10,
      temp: {
        day: 10,
        min: 10,
        max: 10,
        night: 10,
        eve: 10,
        morn: 10,
      },
      feels_like: {
        day: 10,
        night: 10,
        eve: 10,
        morn: 10,
      },
      pressure: 10,
      humidity: 10,
      dew_point: 10,
      wind_speed: 10,
      wind_deg: 10,
      wind_gust: 10,
      weather: [
        {
          id: 10,
          main: Main.Clear,
          description: Description.BrokenClouds,
          icon: 'Cloud',
        },
      ],
      clouds: 10,
      pop: 10,
      uvi: 10,
    },
  ],
};

describe('WeatherDisplay Tests', () => {
  const wrapper = shallow(<WeatherDisplay {...weatherDisplayProps} />);

  test('should Match Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should Label and Item', () => {
    expect(wrapper.find('Label').exists()).toBe(true);
    expect(wrapper.find('WeatherItem').exists()).toBe(true);
  });

  test('should not display Label not Items', () => {
    const wrapper = shallow(<WeatherDisplay />);
    expect(wrapper.find('Label').exists()).toBe(false);
    expect(wrapper.find('WeatherItem').exists()).toBe(false);
  });
});
