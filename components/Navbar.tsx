import { Button, Flex, HStack, Menu, MenuButton, MenuItem, MenuList, Spacer, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@chakra-ui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import scholarly_logo1 from '../public/scholarly_logo1.svg';
import nigeria_flag from '../public/nigeria_flag.svg';
import classes from '../styles/Navbar.module.css';

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

        <HStack spacing={51}>
          <Text color='brand.lime.500' fontWeight='medium'>
            <Link href='/'>Students</Link>
          </Text>
          <Text color='brand.lime.500' fontWeight='medium'>
            <Link href='/'>Partners</Link>
          </Text>
          <Text color='brand.lime.500' fontWeight='medium'>
            <Link href='/'>Business</Link>
          </Text>
          <Menu isLazy>
            <MenuButton color='brand.lime.500' fontWeight='medium'>
              Apps <Icon verticalAlign='middle' as={ChevronDownIcon} />
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
          <Text color='brand.lime.500' fontWeight='medium'>
            <Link href='/'>Blog</Link>
          </Text>
        </HStack>

        <Spacer />
        <HStack spacing={6}>
          <Button type='button' variant='outline'>Contact us</Button>
          <Button type='button' variant='solid'>Activate</Button>
          <Menu isLazy>
            <MenuButton color='brand.lime.500' fontWeight='medium' pt={1.5}>
              <Image src={nigeria_flag} alt="Nigerian flag" />
              <Icon color='brand.darkGreen' ml={1.5} as={ChevronDownIcon} />
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
