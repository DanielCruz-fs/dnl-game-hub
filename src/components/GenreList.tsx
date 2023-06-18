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
import useGenres, { IGenre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

interface IProps {
    onSelectGenre: (genre: IGenre) => void;
    selectedGenre: IGenre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: IProps) => {
    const { data, isLoading, error } = useGenres();

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
                                    g.id === selectedGenre?.id
                                        ? 'bold'
                                        : 'normal'
                                }
                                fontSize='lg'
                                variant='link'
                                onClick={() => onSelectGenre(g)}
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
