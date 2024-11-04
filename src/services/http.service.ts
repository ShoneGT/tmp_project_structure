// src/httpClient.ts

import axios, { AxiosInstance, AxiosResponse } from 'axios';

const baseURL = 'https://api.coindesk.com/v1/';

// Kreiraj instancu axios-a
const httpClient: AxiosInstance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Dodaj interceptor za request, možeš ga koristiti za dodavanje tokena ili logovanje
// httpClient.interceptors.request.use(
//     // (config: AxiosRequestConfig) => {
//     //     // Primer kako dodati auth token ako postoji
//     //     const token = localStorage.getItem('token');
//     //     if (token && config.headers) {
//     //         config.headers.Authorization = `Bearer ${token}`;
//     //     }
//     //     return config;
//     // },
//     (error) => Promise.reject(error)
// );

// Dodaj interceptor za response, za lakše hvatanje grešaka
httpClient.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error) => {
        // Možeš dodati logiku za osvežavanje tokena ili prikazivanje greške korisniku
        console.error('HTTP error:', error);
        return Promise.reject(error);
    }
);

export default httpClient;
