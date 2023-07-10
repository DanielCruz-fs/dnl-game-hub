import { Box, Heading, Text } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import NavBar from '../components/NavBar';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <>
            {/* this navbar component can be omitted since most error pages take the full screen */}
            <NavBar />
            <Box padding={5}>
                <Heading>Oops</Heading>
                <Text>
                    {isRouteErrorResponse(error)
                        ? 'This page does not exist.'
                        : 'An unexpected error occurred.'}
                </Text>
            </Box>
        </>
    );
};

export default ErrorPage;
