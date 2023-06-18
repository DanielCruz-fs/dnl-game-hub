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

interface IProps {
    onSelectedPlatform: (platform: IPlatform) => void;
    selectedPlatform: IPlatform | null;
}

const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: IProps) => {
    const { data, error } = usePlatforms();
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
