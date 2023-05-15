import useGenres, { IGenre } from '../hooks/useGenres';

const GenreList = () => {
    const { data } = useGenres();
    return (
        <div>
            {data.map((g) => (
                <li key={g.id}>{g.name}</li>
            ))}
        </div>
    );
};

export default GenreList;
