'use client';

import { PersonalData } from '@/@types';
import { Box, Center, Text } from '@chakra-ui/react';
import { ParallaxText } from './paralax-text.ui';
export default function Services({ data }: { data: PersonalData['projects'] }) {
  return (
    <Box
      id='#service-section'
      as='section'
      my={'2rem'}
      // px={'1rem'}
      // py={'1rem'}
      bg={'gray.900'}
      overflow={'hidden'}
      pos={'relative'}
      borderRadius={'md'}>
      <Center>
        <Text
          bgGradient='linear(to-r, var(--chakra-colors-gray-300), var(--chakra-colors-gray-600))'
          bgClip='text'
          fontSize='6xl'
          w={'fit-content'}
          fontWeight='bold'
          align={'center'}>
          Services
        </Text>
      </Center>
      <Box my={'1rem'} pos={'relative'} opacity={0.3}>
        <ParallaxText baseVelocity={2}>
          {' ERP, CRM, HRM, GRP, API, '}
        </ParallaxText>
        <ParallaxText baseVelocity={-2}>
          {' Web, Mobile, Desktop Development, '}
        </ParallaxText>
      </Box>
    </Box>
  );
}
