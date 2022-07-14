import { useState } from 'react';
import type { NextPage } from 'next';
import { Box, VStack, Text, Button, Icon, HStack, SimpleGrid, GridItem } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../../components/reusables/Navbar";
import Footer from "../../components/reusables/Footer";
import { apps } from '../../data';
import { DownloadIcon } from '@heroicons/react/solid';
import { DesktopTabNavigation, MobileTabNavigation } from '../../components/apps/TabNavigation';

const Apps: NextPage = () => {
  const [activeTab, setActiveTab] = useState<string>('android');
  const changeTab = (tab: string) => {
    setActiveTab(tab);
  }

  return (
    <div>
      <Head>
        <title>Scholarly Africa | Apps</title>
      </Head>

      <Navbar />
      
      <Box as="main">
        <Box as="section">
          <MobileTabNavigation active={activeTab} changeTab={changeTab} />
          {apps[activeTab].map((category, index) => {
            if (index === 0) {
              return (
                <HStack key={category.category_name} spacing={{lg: "61px"}} align="start">
                  <DesktopTabNavigation active={activeTab} changeTab={changeTab} />
                  <VStack key={category.category_name} spacing={4} align="start" py={10} pr={{base: 5, md: 8}} pl={{base: 5, md: "45px", lg: 0}} flexBasis={{base: "100%", lg: "75%"}}>
                    <VStack spacing={1} align="start">
                      <Text as="h2" color="brand.lime.700" fontSize={[25, 31]} fontWeight="bold">{category.category_name}</Text>
                      <Text color="brand.lime.700" opacity={0.7} fontSize={[16, 20]}>{category.category_description}</Text>
                    </VStack>
                    <SimpleGrid spacing={5} columns={[2, 3, 4]}>
                      {category.apps.map(app => (
                        <GridItem key={app.name}>
                          <VStack spacing={4} bgColor="brand.nearWhite" p={5} borderRadius={4}>
                            <Image src={app.logo.static_img} alt="" width={152} height={152} />
                            <Button type="button" variant="outline">
                              Download
                              <Icon display={{base: "none", md: "inline-block"}} as={DownloadIcon} ml={3.5} />
                            </Button>
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
                        <Image src={app.logo.static_img} alt="" width={152} height={152} />
                        <Button type="button" variant="outline">
                          Download
                          <Icon display={{base: "none", md: "inline-block"}} as={DownloadIcon} ml={3.5} />
                        </Button>
                      </VStack>
                    </GridItem>
                  ))}
                </SimpleGrid>
              </VStack>
            )
          })}
        </Box>
      </Box>

      <Footer />
    </div>
  )
}

export default Apps;