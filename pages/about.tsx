import Head from "next/head";
import type { NextPage } from 'next';
import { Box, Flex, Spacer, Text, VStack } from "@chakra-ui/react";
import Footer from "../components/reusables/Footer";
import Navbar from "../components/reusables/Navbar";
import Page from "../components/reusables/Page";

const About: NextPage = () => {
  return (
    <Page title="Scholarly Africa | About Us">
      <Box as="section" px={[5, "10%", 10, 10, "10%"]} pt={{base: 14, md: "104px"}} pb="104px" bg="brand.lime.700" borderBottom="1px solid" borderColor="brand.yellow">
        <Flex wrap={{base: "wrap", md: "nowrap"}}>
          <VStack spacing={["18px", 9]} align="start" mb={{base: 10, md: 0}} flexBasis={{base: "100%", md: "45%", xl: "42%"}}>
            <Text as="h1" color="brand.yellow" lineHeight="120%" fontSize={[31, 39]} fontWeight="bold">Why we exist</Text>
            <Text color="white" fontSize={20}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non pellentesque faucibus sed in nunc Lorem ipsum dolor sit  consectetur adipiscing elit. Lorem </Text>
          </VStack>

          <Spacer />

          <Box flexBasis={{base: "100%", md: "48%"}} py={{base: 4, md: 12}} px={{base: 4, md: 8}} borderRadius={30} bg="rgba(255, 255, 255, 0.2)">
            <VStack spacing={6} align="start">
              <Text color="white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non pellentesque faucibus sed in nunc Lorem ipsum dolor sit  consectetur adipiscing elit. Lorem </Text>
              <Text color="white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non pellentesque faucibus sed in nunc Lorem ipsum dolor sit  consectetur adipiscing elit. Lorem </Text>
              <Text color="white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non pellentesque faucibus sed in nunc Lorem ipsum dolor sit  consectetur adipiscing elit. Lorem </Text>
            </VStack>
          </Box>
        </Flex>
      </Box>
    </Page>
  )
}

export default About;