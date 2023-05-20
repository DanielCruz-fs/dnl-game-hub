import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames, { IPlatform } from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { IGenre } from '../hooks/useGenres';

interface IProps {
    selectedGenre?: IGenre | null;
    selectedPlatform: IPlatform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: IProps) => {
    const { data, error, isLoading } = useGames(
        selectedGenre,
        selectedPlatform
    );
    const skeletons = [1, 2, 3, 4, 5, 6];
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
                spacing={3}
                padding={10}
            >
                {isLoading &&
                    skeletons.map((sk) => (
                        <GameCardContainer key={sk}>
                            <GameCardSkeleton />
                        </GameCardContainer>
                    ))}
                {data.map((game) => (
                    <GameCardContainer key={game.id}>
                        <GameCard game={game} />
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;
