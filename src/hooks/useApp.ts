import { useEffect, useState } from 'react';
import { fetchApi } from '../helpers/fetch';
import { Locations } from '../interfaces/Locations';
import { WeatherResponse, Daily } from '../interfaces/WeatherResponse';
import { inputButtons } from '../fixtures/Locations';

export interface useAppStore {
  isLoading: boolean;
  temp?: number;
  inputButtons: Locations[];
  handleOnClick: (event: any) => void;
  dailyTemp?: Daily[];
  blockButtons: boolean;
}

export const useApp = (): useAppStore => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [temp, setTemp] = useState<number>();
  const [dailyTemp, setDailyTemp] = useState<Daily[]>();
  const [blockButtons, setBlockButtons] = useState<boolean>(false);

  const fetchData = (latitude: number, longitude: number) =>
    fetchApi({ latitude, longitude });

  const handleOnClick = async (event: any) => {
    setBlockButtons(true);

    try {
      const location = inputButtons.filter(
        (button) => button.value === event.target.value
      );

      const { latitude, longitude } = location[0].location;
      const response = await fetchData(latitude, longitude);
      const body: WeatherResponse = await response.json();

      const { daily } = body;

      setDailyTemp(daily);
      setBlockButtons(false);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    setIsLoading(true);

    try {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        const response = await fetchData(latitude, longitude);
        const body = await response.json();

        const { temp } = body.current;

        setTemp(temp);
        setIsLoading(false);
      });
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  return {
    isLoading,
    temp,
    inputButtons,
    handleOnClick,
    dailyTemp,
    blockButtons,
  };
};
