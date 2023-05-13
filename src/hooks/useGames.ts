import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

export interface Game {
    id: number;
    name: string;
    background_image: string;
}

interface IFetchGamesResponse {
    count: number;
    results: Game[];
}
const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        apiClient
            .get<IFetchGamesResponse>('/games')
            .then((res) => setGames(res.data.results))
            .catch((err) => setError(err.message));
    }, []);

    return { games, error };
};

export default useGames;
