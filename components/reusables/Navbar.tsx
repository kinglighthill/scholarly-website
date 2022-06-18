import { Box, Button, Flex, HStack, Menu, MenuButton, MenuItem, MenuList, Spacer, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@chakra-ui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import scholarly_logo1 from '../../public/scholarly_logo1.svg';
import nigeria_flag from '../../public/nigeria_flag.svg';
import classes from '../../styles/components/Navbar.module.css';
import { BoxWithAppstoreIcon, BoxWithPlaystoreIcon, BoxWithWindowsIcon } from './BoxWithIcon';

export default function Navbar() {
  return (
    <nav className={classes.nav}>
      <Flex>
        <Link href='/' passHref>
          <a className={classes.logo_wrapper}>
            <Image src={scholarly_logo1} alt="Scholarly Logo" priority />
          </a>
        </Link>
        <Spacer />

        <HStack spacing={{base: 25, xl: 51}}>
          <Text color='brand.lime.500' fontWeight='medium'>
            <Link href='/students'>Students</Link>
          </Text>
          <Text color='brand.lime.500' fontWeight='medium'>
            <Link href='/partners'>Partners</Link>
          </Text>
          <Text color='brand.lime.500' fontWeight='medium'>
            <Link href='/'>Business</Link>
          </Text>
          <Menu isLazy>
            <MenuButton color='brand.lime.500' fontWeight='medium'>
              Apps <Icon verticalAlign='middle' as={ChevronDownIcon} />
            </MenuButton>
            <MenuList zIndex={3} borderRadius={16} p={6} boxShadow='0px 0px 20px rgba(0, 0, 0, 0.15)'>
              <MenuItem mb={6}>
                <BoxWithPlaystoreIcon />
                <Box ml={3.5} color='brand.green'>
                  <Text fontWeight='medium'>Android Apps</Text>
                  <Text fontSize='13px' opacity='0.8' lineHeight='18px'>Download from over 30 android apps</Text>
                </Box>
              </MenuItem>
              <MenuItem mb={6}>
                <BoxWithWindowsIcon />
                <Box ml={3.5} color='brand.green'>
                  <Text fontWeight='medium'>Desktop Apps</Text>
                  <Text fontSize='13px' opacity='0.8' lineHeight='18px'>Access over 30 apps for PC</Text>
                </Box>
              </MenuItem>
              <MenuItem>
                <BoxWithAppstoreIcon />
                <Box ml={3.5} color='brand.green'>
                  <Text fontWeight='medium'>IOS Apps</Text>
                  <Text fontSize='13px' opacity='0.8' lineHeight='18px'>Apps not currently available</Text>
                </Box>
              </MenuItem>
            </MenuList>
          </Menu>
          <Text color='brand.lime.500' fontWeight='medium'>
            <Link href='/'>Blog</Link>
          </Text>
        </HStack>

        <Spacer />
        <HStack spacing={{base: 5, xl: 6}}>
          <Button type='button' variant='outline'>Contact us</Button>
          <Button type='button' variant='solid'>Activate</Button>
          <Menu isLazy>
            <MenuButton color='brand.lime.500' fontWeight='medium' pt={1.5}>
              <Image src={nigeria_flag} alt="Nigerian flag" />
              <Icon color='brand.lime.700' ml={1.5} as={ChevronDownIcon} />
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </nav>
  )
}
