import { Box, Button, Flex, HStack, Link as ChakraLink, Menu, MenuButton, MenuItem, MenuList, Spacer, Text, useDisclosure } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@chakra-ui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import scholarly_logo1 from '../../public/scholarly_logo1.svg';
import nigeria_flag from '../../public/nigeria_flag.svg';
import classes from '../../styles/components/Navbar.module.css';
import { BoxWithAppstoreIcon, BoxWithPlaystoreIcon, BoxWithWindowsIcon } from './BoxWithIcon';
import { useRef } from 'react';
import { MenuIcon } from '@heroicons/react/solid';
import NavigationDrawer from '../navbar/NavigationDrawer';

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const hamburgerRef = useRef<SVGSVGElement>(null);

  return (
    <Box as="header" pos='relative' h={{base: 16, lg: 20}} zIndex={100}>
      <nav className={classes.nav}>
        <Flex align='center'>
          <Link href='/' passHref>
            <a className={classes.logo_wrapper}>
              <Image src={scholarly_logo1} alt="Scholarly Logo" priority />
            </a>
          </Link>

          <Spacer />

          <HStack spacing={{base: 25, xl: 51}} display={{base: 'none', lg: 'flex'}} className={classes.desktop_nav}>
            <Link href='/students' passHref>
              <ChakraLink color='brand.lime.500' fontWeight='medium'>Students</ChakraLink>
            </Link>
            <Link href='/partners' passHref>
              <ChakraLink color='brand.lime.500' fontWeight='medium'>Partners</ChakraLink>
            </Link>
            <Link href='/business' passHref>
              <ChakraLink color='brand.lime.500' fontWeight='medium'>Business</ChakraLink>
            </Link>
            {/* Menu is placed within Box as a workaround to the warning that Chakra UI gives when Menu is a direct child of HStack */}
            <Box>
              <Menu>
                <MenuButton color='brand.lime.500' fontWeight='medium'>
                  Apps <Icon verticalAlign='middle' as={ChevronDownIcon} />
                </MenuButton>
                <MenuList zIndex={3} borderRadius={16} p={6} boxShadow='0px 0px 20px rgba(0, 0, 0, 0.15)'>
                  <MenuItem mb={6}>
                    <Link href='/apps/android' passHref>
                      <ChakraLink>
                        <HStack spacing={3.5} w='full'>
                          <BoxWithPlaystoreIcon />
                          <Box color='brand.green'>
                            <Text fontWeight='medium'>Android Apps</Text>
                            <Text fontSize='13px' opacity='0.8' lineHeight='18px'>Download from over 30 android apps</Text>
                          </Box>
                        </HStack>
                      </ChakraLink>
                    </Link>
                  </MenuItem>
                  <MenuItem mb={6}>
                    <Link href='/apps/desktop' passHref>
                      <ChakraLink>
                        <HStack spacing={3.5} w='full'>
                          <BoxWithWindowsIcon />
                          <Box color='brand.green'>
                            <Text fontWeight='medium'>Desktop Apps</Text>
                            {/* <Text fontSize='13px' opacity='0.8' lineHeight='18px'>Access over 30 apps for PC</Text> */}
                            <Text fontSize='13px' opacity='0.8' lineHeight='18px'>Apps not currently available</Text>
                          </Box>
                        </HStack>
                      </ChakraLink>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href='/apps/ios' passHref>
                      <ChakraLink>
                        <HStack spacing={3.5} w='full'>
                          <BoxWithAppstoreIcon />
                          <Box color='brand.green'>
                            <Text fontWeight='medium'>IOS Apps</Text>
                            <Text fontSize='13px' opacity='0.8' lineHeight='18px'>Apps not currently available</Text>
                          </Box>
                        </HStack>
                      </ChakraLink>
                    </Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
            
            <ChakraLink href='https://blog.scholarly.africa' target='_blank' color='brand.lime.500' fontWeight='medium'>Blog</ChakraLink>
          </HStack>

          <Spacer />

          <HStack spacing={{base: 5, xl: 6}} display={{base: 'none', lg: 'flex'}} className={classes.desktop_nav}>
            <Link href='/contact-us' passHref>
              <ChakraLink _hover={{textDecoration: 'none'}}>
                <Button type='button' variant='outline'>Contact us</Button>
              </ChakraLink>
            </Link>
            {/* <Button type='button' variant='solid'>Activate</Button> */}
            {/* <Menu>
              <MenuButton color='brand.lime.500' fontWeight='medium' pt={1.5}>
                <Image src={nigeria_flag} alt="Nigerian flag" />
                <Icon color='brand.lime.700' ml={1.5} as={ChevronDownIcon} />
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
              </MenuList>
            </Menu> */}
          </HStack>
        
          <Icon as={MenuIcon} color='brand.lime.700' fontSize='200%' display={{lg: 'none'}}
            _hover={{bgColor: 'brand.lime.50'}} className={classes.mobile_nav} ref={hamburgerRef}
            onClick={onOpen}
          />
        </Flex>
        
        <NavigationDrawer isOpen={isOpen} onClose={onClose} hamburgerRef={hamburgerRef} />
      </nav>
    </Box>
  )
}
