import { useQuery } from '@tanstack/react-query';
import { IGameQuery } from '../App';
import useData, { IFetchResponse } from './useData';
import apiClient from '../services/api-client';

export interface IPlatform {
    id: number;
    name: string;
    slug: string;
}

export interface IGame {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: IPlatform }[];
    metacritic: number;
    rating_top: number;
}

const useGames = (gameQuery: IGameQuery) =>
    // anytime the gamequery changes even its properties react query send a new request
    useQuery<IFetchResponse<IGame>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: () =>
            apiClient
                .get<IFetchResponse<IGame>>('/games', {
                    params: {
                        genres: gameQuery.genre?.id,
                        parent_platforms: gameQuery.platform?.id,
                        ordering: gameQuery.sortOrder,
                        search: gameQuery.searchText,
                    },
                })
                .then((res) => res.data),
    });
// Using usedata hook instead of library React Query they are similar
// But React Query is way better
// useData<IGame>(
//     '/games',
//     {
//         params: {
//             genres: gameQuery.genre?.id,
//             parent_platforms: gameQuery.platform?.id,
//             ordering: gameQuery.sortOrder,
//             search: gameQuery.searchText,
//         },
//     },
//     [gameQuery]
// );

export default useGames;
