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
import useGameQueryStore from '../store';

const SortSelector = () => {
    const sortOrders = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Date added' },
        { value: 'name', label: 'Name' },
        { value: '-released', label: 'Release date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average rating' },
    ];

    const setSelectedSortOrder = useGameQueryStore((s) => s.setSortOrder);
    const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
    const currentSortOrder = sortOrders.find((cso) => cso.value === sortOrder);
    return (
        <Box>
            <Menu>
                <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                    Order by: {currentSortOrder?.label || 'Relevance'}
                </MenuButton>
                <MenuList>
                    {sortOrders.map((order) => (
                        <MenuItem
                            key={order.label}
                            onClick={() => setSelectedSortOrder(order.value)}
                            value={order.value}
                        >
                            {order.label}
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </Box>
    );
};

export default SortSelector;
