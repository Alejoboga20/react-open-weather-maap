import { Daily } from '../../interfaces/WeatherResponse';
import { Label } from '../common/Label';
import { WeatherItem } from './WeatherItem';
import '../../styles/components/WeatherDisplay.css';

export interface WeatherDisplayProps {
  dailyTemp?: Daily[];
}

export const WeatherDisplay = ({ dailyTemp }: WeatherDisplayProps) => {
  return (
    <div className='weatherDisplay_container'>
      {dailyTemp && (
        <Label labelContent='Temperature for the following days is: ' />
      )}
      {dailyTemp?.map((daily) => (
        <WeatherItem key={daily.dt} temp={daily.temp.day} />
      ))}
    </div>
  );
};
