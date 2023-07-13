import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { IGame } from '../entities/IGame';

const apiClient = new APIClient<IGame>('/games');

const useGame = (slug: string) =>
    useQuery({
        queryKey: ['games', slug],
        queryFn: () => apiClient.get(slug),
    });

export default useGame;
