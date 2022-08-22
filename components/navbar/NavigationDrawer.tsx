import Link from 'next/link';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from '@chakra-ui/react';
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, HStack, Link as ChakraLink, List, ListItem, Text, VStack } from '@chakra-ui/react';
import { XIcon } from '@heroicons/react/solid';
import { NavigationDrawerProps } from '../../types/components/navbar/navigation_drawer';
import { BoxWithAppstoreIcon, BoxWithPlaystoreIcon, BoxWithWindowsIcon } from '../reusables/BoxWithIcon';

export default function NavigationDrawer({ isOpen, onClose, hamburgerRef }: NavigationDrawerProps) {
  return (
    <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={hamburgerRef}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton as={XIcon} color='brand.lime.700' _hover={{bgColor: 'brand.lime.50'}} />
        <DrawerBody px={9} pb={9} pt='75px'>
          <VStack spacing={10} align='start'>
            <Text color='brand.lime.700' fontSize={20}>
              <Link href='/students' passHref>
                <ChakraLink>Students</ChakraLink>
              </Link>
            </Text>
            <Text color='brand.lime.700' fontSize={20}>
              <Link href='/partners' passHref>
                <ChakraLink>Partners</ChakraLink>
              </Link>
            </Text>
            <Text color='brand.lime.700' fontSize={20}>
              <Link href='/business' passHref>
                <ChakraLink>Business</ChakraLink>
              </Link>
            </Text>
            <Accordion w='full' allowToggle>
              <AccordionItem border='none'>
                <h2>
                  <AccordionButton p={0} _hover={{bg: 'none'}}>
                    <Box flex='1' textAlign='left' color='brand.lime.700' fontSize={20}>Apps</Box>
                    <AccordionIcon textAlign='right' />
                  </AccordionButton>
                </h2>
                <AccordionPanel pt={4} pb={0} pl={2} pr={0}>
                  <List spacing={8}>
                    <Link href='/apps/android' passHref>
                      <ChakraLink display='inline-block'>
                        <ListItem>
                          <HStack spacing={3.5}>
                            <BoxWithPlaystoreIcon />
                            <Box color='brand.green'>
                              <Text fontWeight='medium'>Android Apps</Text>
                              <Text fontSize='13px' opacity='0.8' lineHeight='18px'>Download from over 30 android apps</Text>
                            </Box>
                          </HStack>
                        </ListItem>
                      </ChakraLink>
                    </Link>

                    <Link href='/apps/desktop' passHref>
                      <ChakraLink display='inline-block'>
                        <ListItem>
                          <HStack spacing={3.5}>
                            <BoxWithWindowsIcon />
                            <Box color='brand.green'>
                              <Text fontWeight='medium'>Desktop Apps</Text>
                              <Text fontSize='13px' opacity='0.8' lineHeight='18px'>Access over 30 apps for PC</Text>
                            </Box>
                          </HStack>
                        </ListItem>
                      </ChakraLink>
                    </Link>

                    <Link href='/apps/ios' passHref>
                      <ChakraLink display='inline-block'>
                        <ListItem>
                          <HStack spacing={3.5}>
                            <BoxWithAppstoreIcon />
                            <Box color='brand.green'>
                              <Text fontWeight='medium'>IOS Apps</Text>
                              <Text fontSize='13px' opacity='0.8' lineHeight='18px'>Apps not currently available</Text>
                            </Box>
                          </HStack>
                        </ListItem>
                      </ChakraLink>
                    </Link>
                  </List>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Text color='brand.lime.700' fontSize={20}>
              <Link href='/contact-us' passHref>
                <ChakraLink>Contact Us</ChakraLink>
              </Link>
            </Text>
            {/* <Button type='button' variant='solid' w='full'>Activate</Button> */}
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
