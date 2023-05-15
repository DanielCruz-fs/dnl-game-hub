import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface IProps {
    children: ReactNode;
}
const GameCardContainer = ({ children }: IProps) => {
    return (
        <Box borderRadius={10} overflow={'hidden'} width='250px'>
            {children}
        </Box>
    );
};

export default GameCardContainer;
