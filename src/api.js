import axios from 'axios';
import { API_KEY, API_ENDPOINT } from './config';

export const axiosInstance = axios.create({
    baseURL: API_ENDPOINT,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
});
