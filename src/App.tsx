import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { IGenre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { IPlatform } from './hooks/useGames';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';

/**
 * QUERY OBJECT PATTERN: Group all related data to make a query
 */
export interface IGameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder: string;
    searchText: string;
}

function App() {
    const [gameQuery, setGameQuery] = useState<IGameQuery>({} as IGameQuery);

    return (
        <Grid
            templateAreas={{
                base: `'nav' 'main'`,
                lg: `'nav nav' 'aside main'`,
            }}
            templateColumns={{
                base: '1fr',
                lg: '200px 1fr',
            }}
        >
            <GridItem area={'nav'}>
                <NavBar
                    onSearch={(searchText) =>
                        setGameQuery({ ...gameQuery, searchText })
                    }
                />
            </GridItem>
            <Show above='lg'>
                <GridItem area={'aside'} paddingX={5}>
                    <GenreList
                        selectedGenreId={gameQuery.genreId}
                        onSelectGenre={(genre) =>
                            setGameQuery({ ...gameQuery, genreId: genre.id })
                        }
                    />
                </GridItem>
            </Show>
            <GridItem area={'main'}>
                <Box paddingLeft={2}>
                    <GameHeading gameQuery={gameQuery} />
                    <HStack spacing={5}>
                        <PlatformSelector
                            selectedPlatformId={gameQuery.platformId}
                            onSelectedPlatform={(platform) =>
                                setGameQuery({
                                    ...gameQuery,
                                    platformId: platform.id,
                                })
                            }
                        />
                        <SortSelector
                            sortOrder={gameQuery.sortOrder}
                            onSelectSortOrder={(sortOrder) =>
                                setGameQuery({ ...gameQuery, sortOrder })
                            }
                        ></SortSelector>
                    </HStack>
                </Box>
                <GameGrid gameQuery={gameQuery}></GameGrid>
            </GridItem>
        </Grid>
    );
}

export default App;
