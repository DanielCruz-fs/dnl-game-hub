import apiClient from '../services/api-client';
import useData, { IFetchResponse } from './useData';
import { useQuery } from '@tanstack/react-query';
import { IPlatform } from './useGames';

const usePlatforms = () =>
    useQuery({
        queryKey: ['platforms'],
        queryFn: () =>
            apiClient
                .get<IFetchResponse<IPlatform>>('/platforms/lists/parents')
                .then((res) => res.data),
        staleTime: 24 * 60 * 60 * 1000,
    });
export default usePlatforms;
