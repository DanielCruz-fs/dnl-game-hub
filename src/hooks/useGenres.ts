import { useQuery } from '@tanstack/react-query';
import genres from '../data/genres';
import { IFetchResponse } from './useData';
import APIClient from '../services/api-client';
import { IGenre } from '../entities/IGenre';

const apiClient = new APIClient<IGenre>('/genres');

// const useGenres = () => ({ data: genres, isLoading: false, error: null });
// using react query
const useGenres = () =>
    useQuery({
        queryKey: ['genres'],
        queryFn: apiClient.getAll,
        staleTime: 24 * 60 * 60 * 1000, // 24 hrs
        // initialData: { count: genres.length, results: genres, next: null },
        initialData: genres,
    });

// shipping static data
// useData<IGenre>('/genres')

export default useGenres;
