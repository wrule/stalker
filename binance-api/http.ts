import axios from 'axios';

const _http = axios.create({
  baseURL: 'https://api.binance.com',
});

export const http = _http;
