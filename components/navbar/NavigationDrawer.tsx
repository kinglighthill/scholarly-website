import { useRef } from 'react';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Icon, useDisclosure } from '@chakra-ui/react';
import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, HStack, Link as ChakraLink, List, ListItem, Text, VStack } from '@chakra-ui/react';
import { XIcon, MenuIcon } from '@heroicons/react/solid';
import { BoxWithAppstoreIcon, BoxWithPlaystoreIcon, BoxWithWindowsIcon } from '../reusables/BoxWithIcon';
import CustomLink from '../reusables/CustomLink';

export default function NavigationDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const hamburgerRef = useRef<SVGSVGElement>(null);

  return (
    <>
      <Icon as={MenuIcon} color='brand.lime.700' fontSize='200%' display={{lg: 'none'}}
        _hover={{bgColor: 'brand.lime.50'}} ref={hamburgerRef}
        onClick={onOpen}
      />

      <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={hamburgerRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton as={XIcon} color='brand.lime.700' _hover={{bgColor: 'brand.lime.50'}} />
          <DrawerBody px={9} pb={9} pt='75px'>
            <VStack spacing={10} align='start'>
              <CustomLink href='/students' prefetch={false} color='brand.lime.700' fontSize={20}>Students</CustomLink>
              <CustomLink href='/partners' prefetch={false} color='brand.lime.700' fontSize={20}>Partners</CustomLink>
              <CustomLink href='/business' color='brand.lime.700' fontSize={20}>Business</CustomLink>
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
                      <CustomLink href='/apps/android' prefetch={false} display='inline-block'>
                        <ListItem>
                          <HStack spacing={3.5}>
                            <BoxWithPlaystoreIcon />
                            <Box color='brand.green'>
                              <Text fontWeight='medium'>Android Apps</Text>
                              <Text fontSize='13px' opacity='0.8' lineHeight='18px'>Download from over 30 android apps</Text>
                            </Box>
                          </HStack>
                        </ListItem>
                      </CustomLink>

                      <CustomLink href='/apps/desktop' prefetch={false} display='inline-block'>
                        <ListItem>
                          <HStack spacing={3.5}>
                            <BoxWithWindowsIcon />
                            <Box color='brand.green'>
                              <Text fontWeight='medium'>Desktop Apps</Text>
                              {/* <Text fontSize='13px' opacity='0.8' lineHeight='18px'>Access over 30 apps for PC</Text> */}
                              <Text fontSize='13px' opacity='0.8' lineHeight='18px'>Apps not currently available</Text>
                            </Box>
                          </HStack>
                        </ListItem>
                      </CustomLink>

                      <CustomLink href='/apps/ios' prefetch={false} display='inline-block'>
                        <ListItem>
                          <HStack spacing={3.5}>
                            <BoxWithAppstoreIcon />
                            <Box color='brand.green'>
                              <Text fontWeight='medium'>IOS Apps</Text>
                              <Text fontSize='13px' opacity='0.8' lineHeight='18px'>Apps not currently available</Text>
                            </Box>
                          </HStack>
                        </ListItem>
                      </CustomLink>
                    </List>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <ChakraLink isExternal href='https://blog.scholarly.africa' color='brand.lime.700' fontSize={20}>Blog</ChakraLink>
              <CustomLink href='/contact-us' type='button' variant='outline' w='full'>Contact Us</CustomLink>
              {/* <Button type='button' variant='solid' w='full'>Activate</Button> */}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
