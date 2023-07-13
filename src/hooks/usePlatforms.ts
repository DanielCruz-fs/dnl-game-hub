import { IFetchResponse } from './useData';
import { useQuery } from '@tanstack/react-query';
import { IPlatform } from '../entities/IPlatform';
import APIClient from '../services/api-client';
import platforms from '../data/platforms';

const apiClient = new APIClient<IPlatform>('/platforms/lists/parents');

const usePlatforms = () =>
    useQuery({
        queryKey: ['platforms'],
        queryFn: apiClient.getAll,
        staleTime: 24 * 60 * 60 * 1000,
        initialData: platforms,
    });
export default usePlatforms;
