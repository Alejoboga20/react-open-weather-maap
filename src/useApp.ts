import { useEffect, useState } from 'react';
import { fetchApi } from './helpers/fetch';

interface useAppStore {
  isLoading: boolean;
  temp?: number;
}

export const useApp = (): useAppStore => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [temp, setTemp] = useState<number>();

  const loadData = () => {
    setIsLoading(true);

    try {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        const response = await fetchApi({ latitude, longitude });
        const body = await response.json();

        const { temp } = body.current;

        setTemp(temp);

        setIsLoading(false);
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return {
    isLoading,
    temp,
  };
};
