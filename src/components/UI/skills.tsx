'use client';

import { PersonalData } from '@/@types';
import { Box, Center, Flex, Image, Text } from '@chakra-ui/react';
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
      <Flex
        wrap={'wrap'}
        justify={'center'}
        filter={isDesktop ? 'grayscale(1)' : 'none'}>
        {data.map((skill, index) => {
          return (
            <Flex
              key={index}
              direction={'column'}
              w={300}
              align={'center'}
              justify={'center'}
              gap={'1rem'}
              m={'1rem'}>
              <Image
                src={`assets/${skill.icon}.png`}
                alt={skill.name}
                w={70}
                h={70}
              />
              <Text fontSize='2xl' fontWeight='bold' textAlign={'center'}>
                {skill.name}
              </Text>
            </Flex>
          );
        })}
      </Flex>
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
        <Flex wrap={'wrap'} justify={'center'} pos={'relative'}>
          {data.map((skill, index) => {
            return (
              <Flex
                key={index}
                direction={'column'}
                w={300}
                align={'center'}
                justify={'center'}
                gap={'1rem'}
                m={'1rem'}>
                <Image
                  src={`assets/${skill.icon}.png`}
                  alt={skill.name}
                  w={70}
                  h={70}
                />
                <Text fontSize='2xl' fontWeight='bold' textAlign={'center'}>
                  {skill.name}
                </Text>
              </Flex>
            );
          })}
        </Flex>
      </Box>
    </motion.div>
  );
}
