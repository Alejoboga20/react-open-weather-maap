import { Header } from './components/common/Header';
import { CurrentWeatherDisplay } from './components/WeatherDisplay/CurrentWeatherDisplay';
import { useApp } from './hooks/useApp';
import Loader from 'react-loader-spinner';
import { Label } from './components/common/Label';
import { PlaceSelector } from './components/PlaceSelector/PlaceSelector';
import { WeatherDisplay } from './components/WeatherDisplay/WeatherDisplay';
import './styles/App.css';

export const App = () => {
  const {
    isLoading,
    temp,
    inputButtons,
    handleOnClick,
    dailyTemp,
    blockButtons,
  } = useApp();

  return (
    <div className='app'>
      <Header title='React Weather App' subtitle='Code Challenge' />

      <div className='currentWeather_container'>
        {!isLoading ? (
          <CurrentWeatherDisplay temperature={temp} />
        ) : (
          <Loader type='TailSpin' color='#F38BA0' />
        )}
      </div>

      <div className='placeSelector_container'>
        <Label labelContent='Select the city to checkout its weather' />
        <PlaceSelector
          inputButtons={inputButtons}
          onClick={handleOnClick}
          blockButtons={blockButtons}
        />
      </div>

      <div className='weatherDisplayer_container'>
        {!blockButtons ? (
          <WeatherDisplay dailyTemp={dailyTemp} />
        ) : (
          <Loader type='TailSpin' color='#F38BA0' />
        )}
      </div>
    </div>
  );
};
