'use client';

import { UserData } from '@/src/@types';
import { Box, Center, Grid, Text } from '@chakra-ui/react';
export default function Contacts({
  data,
}: {
  data: Pick<
    UserData,
    'github' | 'email' | 'phone_number' | 'linkedin' | 'location'
  >;
}) {
  return (
    <Box
      id='#skills-section'
      as='section'
      my={'2rem'}
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
          Contacts
        </Text>
      </Center>
      <Grid
        templateColumns={[
          'repeat(2, 1fr)',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
          'repeat(4, 1fr)',
        ]}
        placeItems={'center'}
        gap={'3rem'}
        my={'3rem'}></Grid>
    </Box>
  );
}
