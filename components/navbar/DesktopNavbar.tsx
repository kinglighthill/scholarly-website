import { Box, Flex, HStack, Link as ChakraLink, Menu, MenuButton, Icon, MenuList, MenuItem, Spacer, Text } from '@chakra-ui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { BoxWithPlaystoreIcon, BoxWithWindowsIcon, BoxWithAppstoreIcon } from '../reusables/BoxWithIcon';
import CustomLink from '../reusables/CustomLink';

export default function DesktopNavbar() {
  return (
    <>
      <HStack spacing={{base: 25, xl: 51}} display={{base: 'none', lg: 'flex'}}>
        <CustomLink href='/students' prefetch={false} color='brand.lime.500' fontWeight='medium'>Students</CustomLink>
        <CustomLink href='/partners' prefetch={false} color='brand.lime.500' fontWeight='medium'>Partners</CustomLink>
        <CustomLink href='/business' color='brand.lime.500' fontWeight='medium'>Business</CustomLink>
        {/* Menu is placed within Box as a workaround to the warning that Chakra UI gives when Menu is a direct child of HStack */}
        <Box>
          <Menu>
            <MenuButton color='brand.lime.500' fontWeight='medium'>
              Apps <Icon verticalAlign='middle' as={ChevronDownIcon} />
            </MenuButton>
            <MenuList zIndex={3} borderRadius={16} p={6} boxShadow='0px 0px 20px rgba(0, 0, 0, 0.15)'>
              <MenuItem mb={6}>
                <CustomLink href='/apps/android' prefetch={false}>
                  <HStack spacing={3.5} w='full'>
                    <BoxWithPlaystoreIcon />
                    <Box color='brand.green'>
                      <Text fontWeight='medium'>Android Apps</Text>
                      <Text fontSize='13px' opacity='0.8' lineHeight='18px'>Download from over 30 android apps</Text>
                    </Box>
                  </HStack>
                </CustomLink>
              </MenuItem>
              <MenuItem mb={6}>
                <CustomLink href='/apps/desktop' prefetch={false}>
                  <HStack spacing={3.5} w='full'>
                    <BoxWithWindowsIcon />
                    <Box color='brand.green'>
                      <Text fontWeight='medium'>Desktop Apps</Text>
                      {/* <Text fontSize='13px' opacity='0.8' lineHeight='18px'>Access over 30 apps for PC</Text> */}
                      <Text fontSize='13px' opacity='0.8' lineHeight='18px'>Apps not currently available</Text>
                    </Box>
                  </HStack>
                </CustomLink>
              </MenuItem>
              <MenuItem>
                <CustomLink href='/apps/ios' prefetch={false}>
                  <HStack spacing={3.5} w='full'>
                    <BoxWithAppstoreIcon />
                    <Box color='brand.green'>
                      <Text fontWeight='medium'>IOS Apps</Text>
                      <Text fontSize='13px' opacity='0.8' lineHeight='18px'>Apps not currently available</Text>
                    </Box>
                  </HStack>
                </CustomLink>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <ChakraLink isExternal href='https://blog.scholarly.africa' color='brand.lime.500' fontWeight='medium'>Blog</ChakraLink>
      </HStack>

      <Spacer display={{base: 'none', lg: 'block'}} />

      <HStack spacing={{base: 5, xl: 6}} display={{base: 'none', lg: 'flex'}}>
        <CustomLink href='/contact-us' type='button' variant='outline'>Contact us</CustomLink>
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
    </>
  )
}
