import { useQuery } from '@tanstack/react-query';
import genres from '../data/genres';
import { IFetchResponse } from './useData';
import apiClient from '../services/api-client';

export interface IGenre {
    id: number;
    name: string;
    image_background: string;
}

// const useGenres = () => ({ data: genres, isLoading: false, error: null });
// using react query
const useGenres = () =>
    useQuery({
        queryKey: ['genres'],
        queryFn: () =>
            apiClient
                .get<IFetchResponse<IGenre>>('/genres')
                .then((res) => res.data),
        staleTime: 24 * 60 * 60 * 1000, // 24 hrs
        initialData: { count: genres.length, results: genres },
    });

// shipping static data
// useData<IGenre>('/genres')

export default useGenres;
