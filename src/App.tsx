import { Header } from './components/common/Header';
import { CurrentWeatherDisplay } from './components/CurrentWeatherDisplay';
import { useApp } from './useApp';
import Loader from 'react-loader-spinner';
import './styles/App.css';

export const App = () => {
  const { isLoading, temp } = useApp();

  return (
    <div className='app'>
      <Header title='React Weather App' subtitle='Code Challenge' />
      {!isLoading ? (
        <CurrentWeatherDisplay temperature={temp} />
      ) : (
        <Loader type='TailSpin' />
      )}
    </div>
  );
};
