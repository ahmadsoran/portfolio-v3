'use client';
import { Avatar, Button, Heading, Text, VStack } from '@chakra-ui/react';
import { useHover } from '@mantine/hooks';
import { AnimatePresence, motion } from 'framer-motion';
import { CgArrowRight } from 'react-icons/cg';
export default function HeroSection() {
  const { hovered, ref } = useHover();

  return (
    <section>
      <VStack spacing={15}>
        <Avatar
          size={'xl'}
          name={'Ahmed Soran'}
          src={'assets/me.jpeg'}
          opacity={0.7}
        />
        <Heading as={'h2'} size={'md'} opacity={0.7}>
          Hey, I&apos;m Ahmed Soran 👋
        </Heading>
        <Heading
          as={'h1'}
          size={'2xl'}
          textAlign={'center'}
          lineHeight='inherit'>
          <Text
            // as={'span'}
            pos={'relative'}
            _after={{
              content: '""',
              pos: 'absolute',
              top: '50%',
              left: '25%',
              width: '50%',
              minW: '150px',
              height: '30px',
              borderBottom: '5px solid var(--chakra-colors-gray-200)',
              borderBottomRadius: '50%',
              zIndex: -1,
              //   transform: 'rotate(50deg)',
              opacity: 0.2,
            }}>
            Developing
          </Text>
          <Text
            bgGradient='linear(to-r, var(--chakra-colors-gray-100), var(--chakra-colors-gray-600))'
            bgClip='text'
            fontSize='6xl'
            fontWeight='extrabold'>
            Full-Stack Applications
          </Text>
        </Heading>
        <Text opacity={0.5} align={'center'} maxW={'md'}>
          i&apos;m Full-stack developer passionate about crafting user-friendly
          apps across web, mobile, desktop & building scalable APIs that power
          the platform.
        </Text>
        <Button
          // colorScheme={'gray'}
          size={'lg'}
          borderRadius={999}
          mt={'1rem'}
          overflow={'hidden'}
          ref={ref as any}>
          <motion.div
            style={{
              background:
                'linear-gradient(to right,  var(--chakra-colors-gray-500), var(--chakra-colors-gray-600))',
              borderRadius: '999px',
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
            animate={{
              width: hovered ? '100%' : 10,
              height: hovered ? '100%' : 10,
              left: hovered ? 0 : 8,
            }}
          />

          <Text zIndex={9}>Contact Me</Text>
          <AnimatePresence>
            {hovered && (
              <motion.div
                style={{
                  backgroundColor: 'transparent',
                  borderRadius: '999px',
                  zIndex: 999,
                }}
                initial={{ x: 10, opacity: 0, width: 0 }}
                animate={{ x: 5, opacity: 1, width: 'auto' }}
                exit={{ x: 10, opacity: 0, width: 0 }}
                transition={{ delay: 0.23 }}>
                <CgArrowRight />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </VStack>
    </section>
  );
}
