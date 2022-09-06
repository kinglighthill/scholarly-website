import Image from "next/image";
import Link from "next/link";
import { Box, VStack, Text, Button, Icon, HStack, SimpleGrid, GridItem, Link as ChakraLink, Flex, Spacer } from "@chakra-ui/react";
import { DownloadIcon } from '@heroicons/react/solid';
import { DesktopTabNavigation, MobileTabNavigation } from '../../components/apps/TabNavigation';
import ComingSoon from "../reusables/ComingSoon";
import { AppsProps } from "../../types/components/apps/apps";

export default function Apps({ apps_info, activeTab }: AppsProps) {  
  if (activeTab === "desktop" || activeTab === "ios") {
    return (
      <Box as="section">
        <MobileTabNavigation activeTab={activeTab} />
        <HStack spacing={0} align="start">
          <DesktopTabNavigation activeTab={activeTab} />
          <ComingSoon feature={`${activeTab}-apps`} />
        </HStack>
      </Box>
    )
  }

  return (
    <Box as="section">
      <MobileTabNavigation activeTab={activeTab} />
      {apps_info && apps_info.map((app_info, categoryIndex) => {
        if (categoryIndex === 0) {
          return (
            <HStack key={app_info.title} spacing={{lg: "61px"}} align="start">
              <DesktopTabNavigation activeTab={activeTab} />
              <VStack key={app_info.title} spacing={4} align="start" py={10} pr={{base: 5, md: 8}} pl={{base: 5, md: "45px", lg: 0}} flexBasis={{base: "100%", lg: "75%"}}>
                <VStack spacing={1} align="start">
                  <Text as="h2" color="brand.lime.700" fontSize={[25, 31]} fontWeight="bold">{app_info.title}</Text>
                  <Text color="brand.lime.700" opacity={0.7} fontSize={[16, 20]}>{app_info.description}</Text>
                </VStack>
                <SimpleGrid spacing={5} columns={[2, 3, 4]}>
                  {app_info.apps.map((app, index) => (
                    <GridItem key={app.name + index+1} cursor="pointer">
                      <VStack spacing={4} bgColor="brand.nearWhite" p={5} borderRadius={4} pos='relative'>
                        <Link href={`/apps/${app.path}`} passHref>
                          <ChakraLink fontSize={0} _before={{content: "''", display: 'block', pos: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
                            <Image src={app.icon_url} alt={app.name + 'Icon'} width={152} height={152} priority />
                          </ChakraLink>
                        </Link>
                        <ChakraLink href={app.download_link} isExternal _hover={{textDecoration: 'none'}} onClick={(e) => e.stopPropagation()}>
                          <Button type="button" variant="outline" iconSpacing={{base: 0, md: 3.5}} rightIcon={<Icon display={{base: "none", md: "inline-block"}} as={DownloadIcon} />}>
                            Download
                          </Button>
                        </ChakraLink>
                      </VStack>
                    </GridItem>
                  ))}
                </SimpleGrid>
              </VStack>
            </HStack>
          )
        }
        return (
          <VStack key={app_info.title} spacing={4} align="start" py={10} pr={{base: 5, md: 8}} pl={{base: 5, md: "45px", lg: "279px"}} bgColor={categoryIndex%2 === 0 ? "white" : "brand.nearWhite"}>
            <VStack spacing={1} align="start">
              <Text as="h2" color="brand.lime.700" fontSize={[25, 31]} fontWeight="bold">{app_info.title}</Text>
              <Text color="brand.lime.700" opacity={0.7} fontSize={[16, 20]}>{app_info.description}</Text>
            </VStack>
            <SimpleGrid spacing={5} columns={[2, 3, 4]}>
              {app_info.apps.map((app, appIndex) => (
                <GridItem key={app.name + appIndex+1} cursor="pointer">
                  <VStack spacing={4} bgColor={categoryIndex%2 === 0 ? "brand.nearWhite" : "white"} p={5} borderRadius={4} pos='relative'>
                    <Link href={`/apps/${app.path}`} passHref>
                      <ChakraLink fontSize={0} _before={{content: "''", display: 'block', pos: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
                        <Image src={app.icon_url} alt={app.name + 'Icon'} width={152} height={152} priority />
                      </ChakraLink>
                    </Link>
                    <ChakraLink href={app.download_link} isExternal _hover={{textDecoration: 'none'}} onClick={(e) => e.stopPropagation()}>
                      <Button type="button" variant="outline" iconSpacing={{base: 0, md: 3.5}} rightIcon={<Icon display={{base: "none", md: "inline-block"}} as={DownloadIcon} />}>
                        Download
                      </Button>
                    </ChakraLink>
                  </VStack>
                </GridItem>
              ))}
            </SimpleGrid>
          </VStack>
        )
      })}
    </Box>
  )
}