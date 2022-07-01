import { useState } from 'react';
import type { NextPage } from 'next';
import { Box, VStack, Text, Button, Icon, HStack, Flex, Spacer, SimpleGrid, GridItem } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../../components/reusables/Navbar";
import Footer from "../../components/reusables/Footer";
import playstore from "../../public/playstore.svg";
import appstore from "../../public/appstore.svg";
import windows from "../../public/windows.svg";
import classes from "../../styles/Apps.module.css";
import { apps } from '../../data';
import { DownloadIcon } from '@heroicons/react/solid';

type TabNavigationProps = {
  active: string;
  changeTab: (tab: string) => void;
}

function DesktopTabNavigation({ active, changeTab }: TabNavigationProps) {
  return (
    <Box display={{base: "none", lg: "block"}} borderLeft="8px solid #F8C343" w="218px">
      <HStack py={2.5} pl={2.5} cursor="pointer" onClick={() => changeTab("android")}
        className={active === 'android' ? classes.active : undefined}
      >
        <Image src={playstore} alt="Playstore Logo" />
        <Text ml={6} color="brand.lime.700" fontWeight="medium">Android Apps</Text>
      </HStack>
      <HStack py={3.5} pl={3.5} cursor="pointer" onClick={() => changeTab("ios")}
        className={active === 'ios' ? classes.active : undefined}
      >
        <Image src={appstore} alt="Applestore Logo" />
        <Text ml={7} color="brand.lime.700" fontWeight="medium">IOS Apps</Text>
      </HStack>
      <HStack py={3.5} pl={3.5} cursor="pointer" onClick={() => changeTab("desktop")}
        className={active === 'desktop' ? classes.active : undefined}
      >
        <Image src={windows} alt="Windows Logo" />
        <Text ml={7} color="brand.lime.700" fontWeight="medium">Desktop Apps</Text>
      </HStack>
    </Box>
  )
}

function MobileTabNavigation({ active, changeTab }: TabNavigationProps) {
  return (
    <HStack display={{base: "flex", lg: "none"}} align="start" justify="center" spacing={[5, 8]} pt={5} px={5} borderBottom="1px solid" borderBottomColor="rgba(35, 61, 44, 0.2)">
      <Text fontSize={[13, 16]} fontWeight="medium" color="brand.lime.700" opacity={0.5}
        className={active === 'android' ? classes.active : undefined} onClick={() => changeTab("android")}
      >
        Android Apps
      </Text>
      <Text fontSize={[13, 16]} fontWeight="medium" color="brand.lime.700" opacity={0.5}
        className={active === 'desktop' ? classes.active : undefined} onClick={() => changeTab("desktop")}
      >
        Desktop Apps
      </Text>
      <Text fontSize={[13, 16]} fontWeight="medium" color="brand.lime.700" opacity={0.5}
        className={active === 'ios' ? classes.active : undefined} onClick={() => changeTab("ios")}
      >
        IOS Apps
      </Text>
    </HStack>
  )
}

const Apps: NextPage = () => {
  const [activeTab, setActiveTab] = useState<string>('desktop');
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
                <HStack spacing={{lg: "61px"}} align="start">
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
                            <Image src={app.logo} alt="" width={152} height={152} />
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
                        <Image src={app.logo} alt="" width={152} height={152} />
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