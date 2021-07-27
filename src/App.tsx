import './styles/App.css';
import { Header } from './components/common/Header';

export const App = () => {
  return (
    <div className='app'>
      <Header title='React Weather App' subtitle='Code Challenge' />
    </div>
  );
};
