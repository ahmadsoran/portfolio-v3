'use client';

import { ServicesData } from '@/@types';
import { Box, Center, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { ParallaxText } from './paralax-text.ui';
import { Image } from '@chakra-ui/react';
import { fonts } from '@/constant/const';
import { AnimatePresence } from 'framer-motion';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
export default function Services({ data }: { data?: ServicesData[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    margin: '0px 0px -40% 0px',
  });

  return (
    <Box
      ref={containerRef}
      id='#service-section'
      as='section'
      my={'2rem'}
      bg={'gray.900'}
      overflow={'hidden'}
      minH={'90vh'}
      pos={'relative'}
      borderRadius={'md'}>
      <Box
        zIndex={-999}
        top={0}
        left={0}
        // bg={'red'}
        h={'100vh'}
        w={'100%'}
        pos={'absolute'}></Box>
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
      <SimpleGrid p={5} spacing={10} columns={[1, 1, 2]}>
        <AnimatePresence presenceAffectsLayout>
          {data?.map(
            (s, index) =>
              isInView && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9, translateY: 100 }}
                  animate={{ opacity: 1, scale: 1, translateY: 0 }}
                  exit={{ opacity: 0, scale: 0.9, translateY: 100 }}
                  transition={{
                    duration: 1.3,
                    delay: index * 0.2,
                    type: 'spring',
                    bounce: 0.45,
                  }}>
                  <ServiceCard
                    key={index}
                    title={s.title}
                    description={s.description}
                    img={s.img}
                  />
                </motion.div>
              )
          )}
        </AnimatePresence>
      </SimpleGrid>
    </Box>
  );
}

function ServiceCard({
  title,
  description,
  img,
}: {
  title: string;
  description: string;
  img: string;
}) {
  return (
    <VStack
      bg={'gray.800'}
      p={'1rem'}
      borderRadius={'md'}
      h={'100%'}
      // maxW={'sm'}
      minW={'100%'}
      justify={'space-between'}>
      <div>
        <Center>
          <Text
            fontSize='2xl'
            w={'fit-content'}
            fontWeight={'medium'}
            className={fonts.tuskerMid.className}
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
        src={img}
        alt={title}
        w={'100%'}
        h={300}
        borderRadius={4}
        objectFit={'cover'}
        objectPosition='center'
        style={{
          touchAction: 'none',
          MozWindowDragging: 'no-drag',
          userSelect: 'none',
          msUserSelect: 'none',
          MozUserSelect: 'none',
          msTouchSelect: 'none',
          WebkitUserSelect: 'none',
          pointerEvents: 'none',
        }}
      />
    </VStack>
  );
}
