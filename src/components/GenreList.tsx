import {
    Button,
    HStack,
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
}

const GenreList = ({ onSelectGenre }: IProps) => {
    const { data, isLoading, error } = useGenres();

    if (error) return null;

    if (isLoading) return <Spinner />;

    return (
        <List>
            {data.map((g) => (
                <ListItem key={g.id} paddingY='5px'>
                    <HStack>
                        <Image
                            boxSize='32px'
                            borderRadius={8}
                            src={getCroppedImageUrl(g.image_background)}
                        ></Image>
                        <Button
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
    );
};

export default GenreList;
