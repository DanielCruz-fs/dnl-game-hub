import React from 'react';
import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import { GridItem, Heading, SimpleGrid, Spinner } from '@chakra-ui/react';
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
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
                <GridItem>
                    <Heading>{game?.name}</Heading>
                    <ExpandableText>
                        {game ? game?.description_raw : ''}
                    </ExpandableText>
                    <GameAttributes game={game} />
                </GridItem>
                <GridItem>
                    <GameTrailer gameId={game ? game.id : 0}></GameTrailer>
                </GridItem>
            </SimpleGrid>
        </>
    );
};

export default GameDetailPage;
