import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { Box, Flex, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from "@chakra-ui/react";
import Questions from "../components/faqs/Questions";
import Page from "../components/reusables/Page";
import { fetchContent } from '../services/fetch_content.service';

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetchContent('getFAQs/faqs');
    const content = await response.json();
    // Pass content to the page via props  
    return { props: { data: content.data } }
  }
  catch (error) {
    console.log('An error occurred: ' + error);
    return { props: { error: true } }
  }
}

const FAQs: NextPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data } = props;
  
  return (
    <Page title="Frequently Asked Questions | Scholarly" description="See a list of answers to the most popular questions asked by our users about our products and services">
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
                <Questions questions={data} category="student" color="255, 255, 255" />
              </TabPanel>
              <TabPanel p={0}>
                <Questions questions={data} category="partner" color="255, 255, 255" />
              </TabPanel>
              <TabPanel p={0}>
                <Questions questions={data} category="business" color="255, 255, 255" />
              </TabPanel>
            </TabPanels>
          </Flex>
        </Tabs>
      </Box>
    </Page>
  )
}

export default FAQs;