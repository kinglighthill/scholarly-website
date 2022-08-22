import { Box, VStack, Text, Button, Icon, HStack, SimpleGrid, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { apps } from '../../data';
import { DownloadIcon } from '@heroicons/react/solid';
import { DesktopTabNavigation, MobileTabNavigation } from '../../components/apps/TabNavigation';
import { TabNavigationProps } from '../../types/components/apps/tab_navigation';
import ComingSoon from "../reusables/ComingSoon";

export default function Apps({ activeTab }: TabNavigationProps) {
  if (activeTab === "desktop" || activeTab === "ios") {
    return (
      <Box as="section">
        <MobileTabNavigation activeTab={activeTab} />
        <HStack spacing={0} align="start">
          <DesktopTabNavigation activeTab={activeTab} />
          <ComingSoon />
        </HStack>
      </Box>
    )
  }

  return (
    <Box as="section">
      <MobileTabNavigation activeTab={activeTab} />
      {apps[activeTab].map((category, index) => {
        if (index === 0) {
          return (
            <HStack key={category.category_name} spacing={{lg: "61px"}} align="start">
              <DesktopTabNavigation activeTab={activeTab} />
              <VStack key={category.category_name} spacing={4} align="start" py={10} pr={{base: 5, md: 8}} pl={{base: 5, md: "45px", lg: 0}} flexBasis={{base: "100%", lg: "75%"}}>
                <VStack spacing={1} align="start">
                  <Text as="h2" color="brand.lime.700" fontSize={[25, 31]} fontWeight="bold">{category.category_name}</Text>
                  <Text color="brand.lime.700" opacity={0.7} fontSize={[16, 20]}>{category.category_description}</Text>
                </VStack>
                <SimpleGrid spacing={5} columns={[2, 3, 4]}>
                  {category.apps.map(app => (
                    <GridItem key={app.name}>
                      <VStack spacing={4} bgColor="brand.nearWhite" p={5} borderRadius={4}>
                        <Image src={app.logo.static_img} alt="" width={152} height={152} priority />
                        <Link href="/">
                          <a>
                            <Button type="button" variant="outline" iconSpacing={{base: 0, md: 3.5}} rightIcon={<Icon display={{base: "none", md: "inline-block"}} as={DownloadIcon} />}>
                              Download
                            </Button>
                          </a>
                        </Link>
                      </VStack>
                    </GridItem>
                  ))}
                </SimpleGrid>
              </VStack>
            </HStack>
          )
        }
        return (
          <VStack key={category.category_name} spacing={4} align="start" py={10} pr={{base: 5, md: 8}} pl={{base: 5, md: "45px", lg: "279px"}} bgColor={index%2 === 0 ? "white" : "brand.nearWhite"}>
            <VStack spacing={1} align="start">
              <Text as="h2" color="brand.lime.700" fontSize={[25, 31]} fontWeight="bold">{category.category_name}</Text>
              <Text color="brand.lime.700" opacity={0.7} fontSize={[16, 20]}>{category.category_description}</Text>
            </VStack>
            <SimpleGrid spacing={5} columns={[2, 3, 4]}>
              {category.apps.map(app => (
                <GridItem key={app.name}>
                  <VStack spacing={4} bgColor={index%2 === 0 ? "brand.nearWhite" : "white"} p={5} borderRadius={4}>
                    <Image src={app.logo.static_img} alt="" width={152} height={152} priority />
                    <Link href="/">
                      <a>
                        <Button type="button" variant="outline" iconSpacing={{base: 0, md: 3.5}} rightIcon={<Icon display={{base: "none", md: "inline-block"}} as={DownloadIcon} />}>
                          Download
                        </Button>
                      </a>
                    </Link>
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