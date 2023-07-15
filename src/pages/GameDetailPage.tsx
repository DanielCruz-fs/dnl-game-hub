import React from 'react';
import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import { Heading, Spinner } from '@chakra-ui/react';
import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import GameTrailer from '../components/GameTrailer';

const GameDetailPage = () => {
    const { slug } = useParams();

    // with this type annotation we are saying that this constant will never be null
    const { data: game, isLoading, error } = useGame(slug!);

    if (isLoading) return <Spinner />;
    if (error) throw error;

    return (
        <>
            <Heading>{game?.name}</Heading>
            <ExpandableText>{game ? game?.description_raw : ''}</ExpandableText>
            <GameAttributes game={game} />
            <GameTrailer gameId={game ? game.id : 0}></GameTrailer>
        </>
    );
};

export default GameDetailPage;
