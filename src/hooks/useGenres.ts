import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

export interface IGenre {
    id: number;
    name: string;
}

export interface IFetchGenresResponse {
    count: number;
    results: IGenre[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<IGenre[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient
            .get<IFetchGenresResponse>('/genres', { signal: controller.signal })
            .then((res) => {
                setGenres(res.data.results);
                setLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return { genres, error, isLoading };
};

export default useGenres;
