import '../styles/components/WeatherDisplay.css';

interface CurrentWeatherDisplayProps {
  temperature?: number;
}

export const CurrentWeatherDisplay = ({
  temperature,
}: CurrentWeatherDisplayProps) => {
  return (
    <div className='container'>
      {temperature && <p>{`It is ${temperature} degress in the city`}</p>}
    </div>
  );
};
