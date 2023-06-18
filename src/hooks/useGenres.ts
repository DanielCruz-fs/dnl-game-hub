import { useQuery } from '@tanstack/react-query';
import genres from '../data/genres';
import { IFetchResponse } from './useData';
import APIClient from '../services/api-client';

export interface IGenre {
    id: number;
    name: string;
    image_background: string;
}

const apiClient = new APIClient<IGenre>('/genres');

// const useGenres = () => ({ data: genres, isLoading: false, error: null });
// using react query
const useGenres = () =>
    useQuery({
        queryKey: ['genres'],
        queryFn: apiClient.getAll,
        staleTime: 24 * 60 * 60 * 1000, // 24 hrs
        initialData: { count: genres.length, results: genres },
    });

// shipping static data
// useData<IGenre>('/genres')

export default useGenres;
