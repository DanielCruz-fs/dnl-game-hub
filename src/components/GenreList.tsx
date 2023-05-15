import React from 'react';
import useGenres from '../hooks/useGenres';

const GenreList = () => {
    const { genres } = useGenres();
    return (
        <div>
            {genres.map((g) => (
                <li key={g.id}>{g.name}</li>
            ))}
        </div>
    );
};

export default GenreList;
