import '../../styles/components/WeatherItem.css';

export interface WeatherItemProps {
  temp: number;
}

export const WeatherItem = ({ temp }: WeatherItemProps) => (
  <div className='weatherItem_container'>
    <p>{temp} °</p>
  </div>
);
