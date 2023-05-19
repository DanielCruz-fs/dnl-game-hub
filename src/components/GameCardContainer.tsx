import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface IProps {
    children: ReactNode;
}
const GameCardContainer = ({ children }: IProps) => {
    return (
        <Box borderRadius={10} overflow={'hidden'}>
            {children}
        </Box>
    );
};

export default GameCardContainer;
