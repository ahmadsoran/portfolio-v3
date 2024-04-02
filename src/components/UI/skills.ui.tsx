'use client';

import { PersonalData } from '@/@types';
import { Box, Center, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import { useMediaQuery, useMouse } from '@mantine/hooks';
import { motion } from 'framer-motion';
import { useState } from 'react';
export default function Skills({ data }: { data: PersonalData['skills'] }) {
  const isDesktop = useMediaQuery('(min-width: 800px)');
  return (
    <Box
      id='#skills-section'
      as='section'
      my={'2rem'}
      // px={'1rem'}
      // py={'1rem'}
      bg={'gray.900'}
      overflow={'hidden'}
      pos={'relative'}
      borderRadius={'md'}>
      {isDesktop && <ShadowSkill data={data} />}

      <Center>
        <Text
          bgGradient='linear(to-r, var(--chakra-colors-gray-300), var(--chakra-colors-gray-600))'
          bgClip='text'
          fontSize='6xl'
          w={'fit-content'}
          fontWeight='bold'
          align={'center'}>
          SKILLS
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
        my={'3rem'}
        filter={isDesktop ? 'grayscale(1)' : 'none'}>
        {data.map((skill, index) => {
          return (
            <GridItem
              key={index}
              justifyContent={'center'}
              alignItems={'center'}
              display={'flex'}
              flexDirection={'column'}
              gap={'1rem'}>
              <Image
                src={`assets/${skill.icon}.png`}
                alt={skill.name}
                w={[50, 70]}
                h={[50, 70]}
              />
              <Text
                fontSize={['small', 'large', 'larger']}
                fontWeight='bold'
                textAlign={'center'}>
                {skill.name}
              </Text>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
}

function ShadowSkill({ data }: { data: PersonalData['skills'] }) {
  const { x, y, ref } = useMouse();
  const size = 250;
  const [mouseIn, setMouseIn] = useState(false);

  return (
    <motion.div
      className='mask'
      animate={{
        WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
        WebkitMaskSize: `${size}px ${size}px`,
        opacity: mouseIn ? 1 : 0,
        transition: { opacity: { duration: 0.5 } },
      }}
      transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}>
      <Box
        w={'100%'}
        h={'100%'}
        pos={'absolute'}
        top={0}
        left={0}
        ref={ref}
        onMouseEnter={() => setMouseIn(true)}
        onMouseLeave={() => setMouseIn(false)}>
        <Center>
          <Text
            bgGradient='linear(to-r, var(--chakra-colors-cyan-300), var(--chakra-colors-cyan-600))'
            bgClip='text'
            fontSize='6xl'
            w={'fit-content'}
            fontWeight='bold'
            align={'center'}>
            SKILLS
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
          my={'3rem'}>
          {data.map((skill, index) => {
            return (
              <GridItem
                key={index}
                justifyContent={'center'}
                alignItems={'center'}
                display={'flex'}
                flexDirection={'column'}
                gap={'1rem'}>
                <Image
                  src={`assets/${skill.icon}.png`}
                  alt={skill.name}
                  w={[50, 70]}
                  h={[50, 70]}
                />
                <Text
                  fontSize={['small', 'large', 'larger']}
                  fontWeight='bold'
                  textAlign={'center'}>
                  {skill.name}
                </Text>
              </GridItem>
            );
          })}
        </Grid>
      </Box>
    </motion.div>
  );
}
