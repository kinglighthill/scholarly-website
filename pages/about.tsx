import type { NextPage } from 'next';
import { Box, Flex, ListItem, Spacer, Text, UnorderedList, VStack } from "@chakra-ui/react";
import Page from "../components/reusables/Page";

const About: NextPage = () => {
  return (
    <Page title="About Us | Scholarly" description="Scholarly provides all the tools and resources required by students to learn better and make excellent grades. We have so far published over 30 exam preparatory apps for android, iOS and Desktop.">
      <Box as="section" px={[5, "10%", 10, 10, "10%"]} pt={{base: 14, md: "104px"}} pb="104px" bg="brand.lime.700" borderBottom="1px solid" borderColor="brand.yellow">
        <Flex wrap={{base: "wrap", md: "nowrap"}}>
          <VStack spacing={["18px", 9]} align="start" mb={{base: 10, md: 0}} flexBasis={{base: "100%", md: "45%", xl: "42%"}}>
            <Text as="h1" color="brand.yellow" lineHeight="120%" fontSize={[31, 39]} fontWeight="bold">Why we exist</Text>
            <Text color="white" fontSize={20}>We have a sole purpose to improve students&apos; learning outcomes. We are using technology to better serve high quality content to users while at the same time ensuring convenience, accessibility and impact.</Text>
          </VStack>

          <Spacer />

          <Box flexBasis={{base: "100%", md: "48%"}} py={{base: 4, md: 12}} px={{base: 4, md: 8}} borderRadius={30} bg="rgba(255, 255, 255, 0.2)">
            <UnorderedList color="white" spacing={6}>
              <ListItem><strong>Quality:</strong> High-quality learning resources and information readily available to students via technology.</ListItem>
              <ListItem><strong>Ease of use:</strong> Improved accessibility and usability of our apps ensure effective and efficient learning and knowledge transfer.</ListItem>
              <ListItem><strong>Availability:</strong> Looking for a resource for your next exam, interview, or scholarship? Check out our suite of products tailored to your needs. We strive to be the foremost provider of academic and educational resources.</ListItem>
              <ListItem><strong>Trust:</strong> Scholarly has helped thousands of people actualise their dreams and we have gained users&apos; trust over time. In doubt of the materials you have? Just use Scholarly and rest assured that you are getting the best.</ListItem>
            </UnorderedList>
          </Box>
        </Flex>
      </Box>
    </Page>
  )
}

export default About;