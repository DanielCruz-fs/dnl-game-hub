import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import { IGame } from '../hooks/useGames';

interface IProps {
    game: IGame;
}

const GameCard = ({ game }: IProps) => {
    return (
        <Card>
            <Image src={getCroppedImageUrl(game.background_image)}></Image>
            <CardBody>
                <HStack marginBottom={3} justifyContent={'space-between'}>
                    {game.parent_platforms && (
                        <PlatformIconList
                            platforms={game.parent_platforms?.map(
                                (p) => p.platform
                            )}
                        ></PlatformIconList>
                    )}
                    <CriticScore score={game.metacritic}></CriticScore>
                </HStack>
                <Heading fontSize={'2xl'}>{game.name}</Heading>
            </CardBody>
        </Card>
    );
};

export default GameCard;
