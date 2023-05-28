import genres from '../data/genres';
import useData from './useData';

export interface IGenre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => ({ data: genres, isLoading: false, error: null });
// shipping static data
// useData<IGenre>('/genres')

export default useGenres;
