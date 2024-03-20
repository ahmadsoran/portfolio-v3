'use client';
import {
  Box,
  Container,
  Flex,
  IconButton,
  Text,
  VStack,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import { MdClose, MdMenu, MdOutlineEmail } from 'react-icons/md';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from '@chakra-ui/next-js';
import { NavigationLinks } from '@/constant/const';
import { useHeadroom } from '@mantine/hooks';
export default function Navigation() {
  const pinned = useHeadroom({ fixedAt: 120 });
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');

  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box w={'100%'} h={100} as='nav'>
      <NavigationMenu
        isOpen={isOpen}
        isSmallerThan800={isSmallerThan800}
        key={'navigation-menu'}
        onToggle={onToggle}
      />
      <Box
        pos={'fixed'}
        w={'100%'}
        className={'blur-with-support'}
        borderBottom={'1px solid #8080805b'}
        transition={'all 1s'}
        transform={`translateY(${pinned ? 0 : '-100%'})`}
        zIndex={999}>
        <Container maxW={'container.xl'} className='default-padding'>
          <Flex justifyContent={'space-between'}>
            <Flex align={'center'} gap={3}>
              <Box
                outline={'1px solid var(--chakra-colors-gray-300)'}
                p={3}
                borderRadius={9999}>
                <MdOutlineEmail fontSize={20} />
              </Box>

              <Text fontWeight={'600'}>ahmadsorann1@gmail.com</Text>
            </Flex>
            <Flex gap={5} align={'center'} hidden={isSmallerThan800}>
              {NavigationLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  w={'100%'}
                  textAlign={'center'}>
                  {item.text}
                </Link>
              ))}
            </Flex>
            <IconButton
              hidden={!isSmallerThan800}
              aria-label={'menu'}
              icon={<MdMenu size={25} />}
              borderRadius={999}
              onClick={onToggle}
              // bg={'var(--chakra-colors-gray-900)'}
              // _hover={{ bg: 'var(--chakra-colors-gray-900)' }}
            />
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}

export function NavigationMenu({
  isOpen,
  isSmallerThan800,
  onToggle,
}: {
  isOpen: boolean;
  isSmallerThan800: boolean;
  onToggle?: () => void;
}) {
  return (
    <Flex align={'center'} justify={'center'}>
      <AnimatePresence>
        {isOpen && isSmallerThan800 && (
          <motion.div
            className='default-padding blur-with-support'
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 99,
              overflow: 'hidden',
              border: '1px solid var(--chakra-colors-gray-500)',
            }}
            initial={{ clipPath: 'circle(25px at calc(100% - 2.3rem) 35px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 2.3rem) 35px)' }}
            exit={{ clipPath: 'circle(25px at calc(100% - 2.3rem) 35px)' }}
            transition={{ duration: 1 }}>
            <Flex justify={'space-between'} align={'center'}>
              <Text>Navigation Menu</Text>
              <IconButton
                aria-label={'menu'}
                icon={<MdClose size={25} />}
                borderRadius={999}
                onClick={onToggle}
                // bg={'var(--chakra-colors-gray-900)'}
                // _hover={{ bg: 'var(--chakra-colors-gray-900)' }}
              />
            </Flex>
            <Box py={10} h={'100%'}>
              <VStack justify='space-evenly' h={'100%'}>
                {NavigationLinks.map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    w={'100%'}
                    textAlign={'center'}
                    h={50}
                    transition={'all 0.3s'}
                    _hover={{ transform: 'scale(1.2)' }}>
                    {item.text}
                  </Link>
                ))}
              </VStack>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Flex>
  );
}
