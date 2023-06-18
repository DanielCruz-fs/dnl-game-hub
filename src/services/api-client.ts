import axios, { AxiosRequestConfig } from 'axios';
import { IFetchResponse } from '../hooks/useData';

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '6ff559dfe7d0461eaed664efae8fc2bb',
    },
});

class APIClient<T> {
    endPoint: string;

    constructor(endPoint: string) {
        this.endPoint = endPoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
            .get<IFetchResponse<T>>(this.endPoint, config)
            .then((res) => res.data);
    };
}

export default APIClient;
