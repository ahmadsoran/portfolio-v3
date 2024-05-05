'use client';

import { ServicesData } from '@/@types';
import { Box, Center, Grid, GridItem, Text, VStack } from '@chakra-ui/react';
import { ParallaxText } from './paralax-text.ui';
import { Image } from '@chakra-ui/next-js';
export default function Services({ data }: { data: ServicesData[] }) {
  return (
    <Box
      id='#service-section'
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
          Services
        </Text>
      </Center>
      <Box my={'1rem'} pos={'relative'} opacity={0.3}>
        <ParallaxText baseVelocity={2}>
          {' ERP, CRM, HRM, E-COMMERCE, '}
        </ParallaxText>
        <ParallaxText baseVelocity={-2}>
          {' Web, Mobile, Desktop Development, '}
        </ParallaxText>
      </Box>
      <Grid
        p={'2rem'}
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
        ]}
        placeItems={'center'}
        gap={'3rem'}
        alignItems={'stretch'}>
        {data.map((project, index) => (
          <GridItem key={index}>
            <ServiceCard
              title={project.title}
              description={project.description}
              icon={project.icon}
            />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

function ServiceCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <VStack
      bg={'gray.800'}
      p={'1rem'}
      borderRadius={'md'}
      h={'100%'}
      maxW={'sm'}
      minW={'xs'}
      justify={'space-between'}>
      <div>
        <Center>
          <Text
            fontSize='2xl'
            w={'fit-content'}
            fontFamily={'sans-serif'}
            fontWeight={'bold'}
            align={'center'}>
            {title}
          </Text>
        </Center>
        <Text opacity={0.5} align={'center'} maxW={'md'}>
          {description}
        </Text>
      </div>

      <Image
        mt={'1rem'}
        src={icon}
        alt={title}
        width={300}
        height={300}
        w={'100%'}
        h={150}
        borderRadius={4}
        objectFit={'cover'}
        objectPosition='center'
      />
    </VStack>
  );
}
