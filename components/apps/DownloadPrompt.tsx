import { Button, Icon, Box, HStack, Menu, MenuButton, MenuItem, MenuList, Text, Portal } from "@chakra-ui/react";
import { DownloadIcon } from "@heroicons/react/solid";
import { BoxWithPlaystoreIcon, BoxWithWindowsIcon, BoxWithAppstoreIcon } from "../reusables/BoxWithIcon";
import { AppMinified } from "../../types/components/apps/apps";

function DownloadPrompt({ app, dark }: { app: AppMinified, dark: boolean }) {
  return (
    <Menu>
      {
        dark ?
          <MenuButton as={Button} variant='solid' fontWeight='medium' display={{base: "none", lg: "inline"}}
            rightIcon={<Icon display={{ base: "none", md: "inline-block" }} verticalAlign='middle' as={DownloadIcon} />}
          >
            Download
          </MenuButton>
          : <MenuButton as={Button} variant='outline' color='brand.lime.500' fontWeight='medium'
            rightIcon={<Icon display={{ base: "none", md: "inline-block" }} verticalAlign='middle' as={DownloadIcon} />}
          >
            Download
          </MenuButton>
      }
      <Portal>
        <MenuList zIndex={3} borderRadius={16} p={6} boxShadow='0px 0px 20px rgba(0, 0, 0, 0.15)'>
          {/* <MenuItem as='a' href={download_link} mb={6}> */}
          {
            app.available_on_android ?
              <MenuItem as='a' href={`/api/download?fileName=${app.path}&platform=android`} mb={6}>
                <HStack spacing={3.5} w='full'>
                  <BoxWithPlaystoreIcon width={32} height={29} />
                  <Box color='brand.green'>
                    <Text fontWeight='medium'>Download for Android</Text>
                    <Text fontSize='13px' opacity='0.8' lineHeight='18px'>Download from over 30 android apps</Text>
                  </Box>
                </HStack>
              </MenuItem>
              : <MenuItem as='a' href={`/apps/android`} mb={6} disabled>
                <HStack spacing={3.5} w='full'>
                  <BoxWithPlaystoreIcon width={32} height={29} />
                  <Box color='brand.green'>
                    <Text fontWeight='medium'>Download for Android</Text>
                    <Text fontSize='13px' opacity='0.8' lineHeight='18px'>Download from over 30 android apps</Text>
                  </Box>
                </HStack>
              </MenuItem>
          }

          {
            app.available_on_ios ?
              // <MenuItem as='a' href='/apps/ios' mb={6}>
              <MenuItem as='a' href={`/api/download?fileName=${app.path}&platform=ios`} mb={6}>
                <HStack spacing={3.5} w='full'>
                  <BoxWithAppstoreIcon width={24} height={24} />
                  <Box color='brand.green'>
                    <Text fontWeight='medium'>Download for iOS</Text>
                    <Text fontSize='13px' opacity='0.8' lineHeight='18px'>Download from over 30 ios app</Text>
                  </Box>
                </HStack>
              </MenuItem>
              : <MenuItem as='a' href='/apps/ios' mb={6} disabled>
                <HStack spacing={3.5} w='full'>
                  <BoxWithAppstoreIcon width={24} height={24} />
                  <Box color='brand.green'>
                    <Text fontWeight='medium'>Download for iOS</Text>
                    <Text fontSize='13px' opacity='0.8' lineHeight='18px'>Apps not currently available</Text>
                  </Box>
                </HStack>
              </MenuItem>
          }
          {
            app.available_on_desktop ?
              // <MenuItem as='a' href='/apps/desktop' mb={6}>
              <MenuItem as='a' href={`/api/download?fileName=${app.path}&platform=windows`} mb={6}>
                <HStack spacing={3.5} w='full'>
                  <BoxWithWindowsIcon width={24} height={24} />
                  <Box color='brand.green'>
                    <Text fontWeight='medium'>Download for PC</Text>
                    {/* <Text fontSize='13px' opacity='0.8' lineHeight='18px'>Access over 30 apps for PC</Text> */}
                    <Text fontSize='13px' opacity='0.8' lineHeight='18px'>Download for windows</Text>
                  </Box>
                </HStack>
              </MenuItem>
              : <MenuItem as='a' href='/apps/desktop' mb={6} disabled>
                <HStack spacing={3.5} w='full'>
                  <BoxWithWindowsIcon width={24} height={24} />
                  <Box color='brand.green'>
                    <Text fontWeight='medium'>Download for PC</Text>
                    {/* <Text fontSize='13px' opacity='0.8' lineHeight='18px'>Access over 30 apps for PC</Text> */}
                    <Text fontSize='13px' opacity='0.8' lineHeight='18px'>Apps not currently available</Text>
                  </Box>
                </HStack>
              </MenuItem>
          }
        </MenuList>
      </Portal>
    </Menu>
  )
}

DownloadPrompt.defaultProps = {
  dark: false
}

export default DownloadPrompt