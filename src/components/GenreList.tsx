import {
    Button,
    HStack,
    Heading,
    Image,
    List,
    ListItem,
    Spinner,
    Text,
} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import { IGenre } from '../entities/IGenre';
import getCroppedImageUrl from '../services/image-url';
import useGameQueryStore from '../store';

const GenreList = () => {
    const { data, isLoading, error } = useGenres();
    const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
    const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

    if (error) return null;

    if (isLoading) return <Spinner />;

    return (
        <>
            <Heading fontSize='2xl' marginBottom={3}>
                Genres
            </Heading>
            <List>
                {data?.results.map((g) => (
                    <ListItem key={g.id} paddingY='5px'>
                        <HStack>
                            <Image
                                objectFit='cover'
                                boxSize='32px'
                                borderRadius={8}
                                src={getCroppedImageUrl(g.image_background)}
                            ></Image>
                            <Button
                                whiteSpace='normal'
                                textAlign='left'
                                fontWeight={
                                    g.id === selectedGenreId ? 'bold' : 'normal'
                                }
                                fontSize='lg'
                                variant='link'
                                onClick={() => setSelectedGenreId(g.id)}
                            >
                                {g.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default GenreList;
