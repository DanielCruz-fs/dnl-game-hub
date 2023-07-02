import {
    Box,
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from '@chakra-ui/react';
import React from 'react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';
import { IPlatform } from '../hooks/useGames';
import usePlatform from '../hooks/usePlatform';

interface IProps {
    onSelectedPlatform: (platform: IPlatform) => void;
    selectedPlatformId?: number;
}

const PlatformSelector = ({
    onSelectedPlatform,
    selectedPlatformId,
}: IProps) => {
    const { data, error } = usePlatforms();
    const selectedPlatform = usePlatform(selectedPlatformId);

    if (error) return null;

    return (
        <Box>
            <Menu>
                <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                    {selectedPlatform?.name || 'Platforms'}
                </MenuButton>
                <MenuList>
                    {data?.results.map((platform) => (
                        <MenuItem
                            key={platform.id}
                            onClick={() => onSelectedPlatform(platform)}
                        >
                            {platform.name}
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </Box>
    );
};

export default PlatformSelector;
