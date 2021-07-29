import '../../styles/components/CurrentWeatherDisplay.css';
import { Label } from '../common/Label';

interface CurrentWeatherDisplayProps {
  temperature?: number;
}

export const CurrentWeatherDisplay = ({
  temperature,
}: CurrentWeatherDisplayProps) => {
  return (
    <div className='weather_container'>
      {temperature ? (
        <Label labelContent={`It is ${temperature} degress in the city`} />
      ) : (
        <Label labelContent='Please Ensure your location service is working' />
      )}
    </div>
  );
};
