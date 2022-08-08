import Head from "next/head";
import type { NextPage } from 'next';
import Navbar from "../components/reusables/Navbar";
import Footer from "../components/reusables/Footer";
import { Box, Flex, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from "@chakra-ui/react";
import Questions from "../components/faqs/Questions";

const FAQs: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Scholarly Africa | Frequently Asked Questions</title>
      </Head>
      <Navbar />
      
      <main>
        <Box as="section" px={[5, "10%", 10, 10, "10%"]} pt={{base: 14, md: 20}} pb={16} bg="brand.lime.700" borderBottom="1px solid" borderColor="brand.yellow">
          <Tabs variant='unstyled' isLazy>
            <Flex wrap={{base: "wrap", md: "nowrap"}}>
              <Box flexBasis={{base: "100%", md: "40%"}} mb={{base: 10, md: 0}}>
                <TabList mb={8} color="white">
                  <Tab pl={0} _selected={{pl: 4, borderRadius: 4, bg: "#7EC594"}}>Students</Tab>
                  <Tab _selected={{borderRadius: 4, bg: "#7EC594"}}>Partners</Tab>
                  <Tab _selected={{borderRadius: 4, bg: "#7EC594"}}>Business</Tab>
                </TabList>
                <VStack spacing={{base: 4, md: 9}} align="start">
                  <Text color="brand.yellow" fontSize={{base: 31, md: 39}} fontWeight="bold" lineHeight="120%">FAQs</Text>
                  <Text color="white" fontSize={20}>Have a question? Check the answers to our most popular questions.</Text>
                </VStack>
              </Box>

              <Spacer />

              <TabPanels flexBasis={{base: "100%", md: "48%"}}>
                <TabPanel p={0}>
                  <Questions category="students" />
                </TabPanel>
                <TabPanel p={0}>
                  <Questions category="partners" />
                </TabPanel>
                <TabPanel p={0}>
                  <Questions category="business" />
                </TabPanel>
              </TabPanels>
            </Flex>
          </Tabs>
        </Box>
      </main>

      <Footer />
    </div>
  )
}

export default FAQs;