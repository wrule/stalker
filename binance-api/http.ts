import axios from 'axios';

export
interface IProps {
  base_url?: string;
  api_key: string;
  secret_key: string;
}

export
function Http(props: IProps) {
  const http = axios.create({
    baseURL: props.base_url || 'https://api.binance.com',
    headers: {
      'X-MBX-APIKEY': props.api_key,
    },
  });
  return http;
}
