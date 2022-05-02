import axios from 'axios';
import axiosRetry from 'axios-retry';
import { BASE_URL } from 'env';

export const API = axios.create({
  baseURL: BASE_URL,
  responseType: 'json',
  withCredentials: true,
});

// for repeat the request 3 time
axiosRetry(API, { retryDelay: axiosRetry.exponentialDelay });
axiosRetry(API, { retries: 3 });
