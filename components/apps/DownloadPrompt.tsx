import { Button, Icon, Box, HStack, Menu, MenuButton, MenuItem, MenuList, Text, Portal } from "@chakra-ui/react";
import { DownloadIcon } from "@heroicons/react/solid";
import { BoxWithPlaystoreIcon, BoxWithWindowsIcon, BoxWithAppstoreIcon } from "../reusables/BoxWithIcon";
import { AppMinified } from "../../types/components/apps/apps";
import { trackDownloadClick } from "../../utils";
import { useRouter } from "next/router";

interface DownloadPromptProps {
  app: AppMinified;
  dark: boolean;
}

function DownloadPrompt({ app, dark }: DownloadPromptProps) {
  const router = useRouter();
  return (
    <Menu>
      <MenuButton as={Button} variant={dark ? 'solid' : 'outline'} fontWeight='medium'
        rightIcon={<Icon display={{ base: "none", md: "inline-block" }} verticalAlign='middle' as={DownloadIcon} />}
      >
        Download
      </MenuButton>
      <Portal>
        <MenuList zIndex={3} borderRadius={16} p={6} boxShadow='0px 0px 20px rgba(0, 0, 0, 0.15)'>
          <MenuItem as='a' mb={6} disabled={!app.available_on_android}
            onClick={() => trackDownloadClick(app.app_name, "Android", "From Apps pages", [router.query.app as string])}
            href={app.available_on_android ? `/api/download?fileName=${app.path}&platform=android` : '/apps/android'}
          >
            <HStack spacing={3.5} w='full'>
              <BoxWithPlaystoreIcon width={32} height={29} />
              <Box color='brand.green'>
                <Text fontWeight='medium'>Download for Android</Text>
                <Text fontSize='13px' opacity='0.8' lineHeight='18px'>
                  {app.available_on_android ? 'Download app for android' : 'App not currently available'}
                </Text>
              </Box>
            </HStack>
          </MenuItem>

          <MenuItem as='a' mb={6} disabled={!app.available_on_ios}
            onClick={() => trackDownloadClick(app.app_name, "iOS", "From Apps pages", [router.query.app as string])}
            href={app.available_on_ios ? `/api/download?fileName=${app.path}&platform=ios` : '/apps/ios'}
          >
            <HStack spacing={3.5} w='full'>
              <BoxWithAppstoreIcon width={24} height={24} />
              <Box color='brand.green'>
                <Text fontWeight='medium'>Download for iOS</Text>
                <Text fontSize='13px' opacity='0.8' lineHeight='18px'>
                  {app.available_on_ios ? 'Download app for iOS' : 'App not currently available'}
                </Text>
              </Box>
            </HStack>
          </MenuItem>
          <MenuItem as='a' mb={6} disabled={!app.available_on_desktop}
            onClick={() => trackDownloadClick(app.app_name, "Windows", "From Apps pages", [router.query.app as string], 2024)}
            href={app.available_on_desktop ? `/api/download?fileName=${app.path}&platform=windows` : '/apps/desktop'}
          >
            <HStack spacing={3.5} w='full'>
              <BoxWithWindowsIcon width={24} height={24} />
              <Box color='brand.green'>
                <Text fontWeight='medium'>Download for PC</Text>
                <Text fontSize='13px' opacity='0.8' lineHeight='18px'>
                  {app.available_on_desktop ? 'Download app for Windows' : 'App not currently available'}
                </Text>
              </Box>
            </HStack>
          </MenuItem>
        </MenuList>
      </Portal>
    </Menu>
  )
}

DownloadPrompt.defaultProps = {
  dark: false
}

export default DownloadPrompt