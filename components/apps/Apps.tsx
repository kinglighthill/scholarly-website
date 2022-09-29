import Image from "next/image";
import { Box, VStack, Text, Icon, HStack, SimpleGrid, GridItem, Link as ChakraLink, Flex, Spacer } from "@chakra-ui/react";
import { DownloadIcon } from '@heroicons/react/solid';
import { DesktopTabNavigation, MobileTabNavigation } from '../../components/apps/TabNavigation';
import ComingSoon from "../reusables/ComingSoon";
import { AppsProps } from "../../types/components/apps/apps";
import ContactForm from "../reusables/ContactForm";
import CustomLink from "../reusables/CustomLink";

export default function Apps({ apps_info, activeTab }: AppsProps) {  
  if (activeTab === "desktop" || activeTab === "ios") {
    return (
      <Box as="section">
        <MobileTabNavigation activeTab={activeTab} />
        <HStack spacing={0} align="start" className='responsive_1440px'>
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
            <HStack key={app_info.title} spacing={{lg: "61px"}} align="start" className='responsive_1440px'>
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
                        <CustomLink href={`/apps/${encodeURIComponent(app.path)}`} fontSize={0} boxShadow="0px 2.90312px 33px 8px rgba(0, 0, 0, 0.08)"
                          _before={{content: "''", display: 'block', pos: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
                        >
                          <Image src={app.icon_url} alt={app.name + 'Icon'} width={152} height={152} priority />
                        </CustomLink>
                        <ChakraLink href={app.download_link} isExternal _hover={{textDecoration: 'none', bg: 'brand.lime.50'}} onClick={(e) => e.stopPropagation()}
                          display='inline-flex' justifyContent='center' alignItems='center' fontWeight='medium' verticalAlign='middle'
                          px={4} h={10} borderRadius={4} color='brand.lime.500' border='1px solid' borderColor='brand.lime.500' zIndex={1}
                        >
                          Download
                          <Text as='span' ml={{base: 0, md: 3.5}} display='inline-flex'>
                            <Icon display={{base: "none", md: "inline-block"}} as={DownloadIcon} />
                          </Text>
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
          <VStack key={app_info.title} spacing={4} align="start" py={10} pr={{base: 5, md: 8}} pl={{base: 5, md: "45px", lg: "279px"}}
            bgColor={categoryIndex%2 === 0 ? "white" : "brand.nearWhite"} className='responsive_1440px'
          >
            <VStack spacing={1} align="start">
              <Text as="h2" color="brand.lime.700" fontSize={[25, 31]} fontWeight="bold">{app_info.title}</Text>
              <Text color="brand.lime.700" opacity={0.7} fontSize={[16, 20]}>{app_info.description}</Text>
            </VStack>
            <SimpleGrid spacing={5} columns={[2, 3, 4]}>
              {app_info.apps.map((app, appIndex) => (
                <GridItem key={app.name + appIndex+1} cursor="pointer">
                  <VStack spacing={4} bgColor={categoryIndex%2 === 0 ? "brand.nearWhite" : "white"} p={5} borderRadius={4} pos='relative'>
                    <CustomLink href={`/apps/${encodeURIComponent(app.path)}`} fontSize={0} boxShadow="0px 2.90312px 33px 8px rgba(0, 0, 0, 0.08)"
                      _before={{content: "''", display: 'block', pos: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
                    >
                      <Image src={app.icon_url} alt={app.name + 'Icon'} width={152} height={152} priority />
                    </CustomLink>
                    <ChakraLink href={app.download_link} isExternal _hover={{textDecoration: 'none', bg: 'brand.lime.50'}} onClick={(e) => e.stopPropagation()}
                      display='inline-flex' justifyContent='center' alignItems='center' fontWeight='medium' verticalAlign='middle'
                      px={4} h={10} borderRadius={4} color='brand.lime.500' border='1px solid' borderColor='brand.lime.500' zIndex={1}
                    >
                      Download
                      <Text as='span' ml={{base: 0, md: 3.5}} display='inline-flex'>
                        <Icon display={{base: "none", md: "inline-block"}} as={DownloadIcon} />
                      </Text>
                    </ChakraLink>
                  </VStack>
                </GridItem>
              ))}
            </SimpleGrid>
          </VStack>
        )
      })}
      <Box as="section" bg={apps_info.length%2 === 0 ? "white" : "brand.nearWhite"} px={{base: 5, md: "60px", lg: "79px", xl: "120px"}} py={{base: "60px", lg: "100px"}}>
        <Flex align='start' wrap={{base: 'wrap', md: 'nowrap'}} className='responsive_1440px'>
          <VStack spacing={6} align="start" flexBasis={{base: '100%', md: '52%', xl: '45%'}}>
            <Text color="brand.lime.700" fontSize={22} fontWeight="bold">Didn&apos;t find the app you were looking for?</Text>
            <Text color="brand.lime.700">Request an app and we&apos;ll consider adding it in future releases.</Text>
          </VStack>
          <Spacer />
          <Box flexBasis={{base: "100%", md: "43%"}} mt={{base: 10, md: 0}}>
            <ContactForm textColor='brand.lime.700' defaultSubject='Request for an app' />        
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}