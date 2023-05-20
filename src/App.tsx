import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { IGenre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { IPlatform } from './hooks/useGames';

/**
 * QUERY OBJECT PATTERN: Group all related data to make a query
 */
export interface IGameQuery {
    genre: IGenre | null;
    platform: IPlatform | null;
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
                <NavBar></NavBar>
            </GridItem>
            <Show above='lg'>
                <GridItem area={'aside'} paddingX={5}>
                    <GenreList
                        selectedGenre={gameQuery.genre}
                        onSelectGenre={(genre) =>
                            setGameQuery({ ...gameQuery, genre: genre })
                        }
                    />
                </GridItem>
            </Show>
            <GridItem area={'main'}>
                <PlatformSelector
                    selectedPlatform={gameQuery.platform}
                    onSelectedPlatform={(platform) =>
                        setGameQuery({ ...gameQuery, platform: platform })
                    }
                />
                <GameGrid gameQuery={gameQuery}></GameGrid>
            </GridItem>
        </Grid>
    );
}

export default App;
