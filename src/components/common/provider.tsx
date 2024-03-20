import { ChakraProvider, Container } from '@chakra-ui/react';
import React from 'react';
import Navigation from '../UI/navigation.ui';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <Navigation />
      <Container maxW={'container.xl'} className='default-padding' minW={300}>
        {children}
      </Container>
    </ChakraProvider>
  );
}
