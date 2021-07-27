const baseUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

interface fetchArgs {
  latitude: number;
  longitude: number;
}

export const fetchApi = ({
  latitude,
  longitude,
}: fetchArgs): Promise<Response> => {
  const url: string = `${baseUrl}lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  return fetch(url);
};
