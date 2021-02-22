import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_API_BASE_URL : '/',
});
