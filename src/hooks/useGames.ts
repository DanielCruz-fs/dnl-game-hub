import { useInfiniteQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import useGameQueryStore from '../store';
import { IFetchResponse } from './useData';

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

const apiClient = new APIClient<IGame>('/games');

const useGames = () => {
    const gameQuery = useGameQueryStore((s) => s.gameQuery);

    return useInfiniteQuery<IFetchResponse<IGame>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: ({ pageParam = 1 }) =>
            apiClient.getAll({
                params: {
                    genres: gameQuery.genreId,
                    parent_platforms: gameQuery.platformId,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText,
                    page: pageParam,
                },
            }),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        },
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
};

export default useGames;
