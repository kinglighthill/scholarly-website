import Image from 'next/image';
import type { NextPage } from 'next';
import { Box, Flex, GridItem, SimpleGrid, Spacer, Text, VStack } from "@chakra-ui/react";
import Page from "../components/reusables/Page";

const ContactUs: NextPage = () => {
  return (
    <Page title="Scholarly Africa | Contact Us">
      <Box as="section" px={[5, "10%", 10, 10, "10%"]} pt={{base: 14, md: 28}} pb={28} bg="brand.lime.700" borderBottom="1px solid" borderColor="brand.yellow">
        <Flex wrap={{base: "wrap", md: "nowrap"}}>
          <VStack spacing={["18px", 9]} align="start" mb={{base: 9, md: 0}} flexBasis={{base: "100%", md: "45%"}}>
            <Text as="h1" color="brand.yellow" lineHeight="120%" fontSize={[31, 39]} fontWeight="bold">Contact Us</Text>
            <Text color="white" fontSize={20}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non pellentesque faucibus sed in nunc</Text>
          </VStack>
          
          <Spacer />

          <SimpleGrid columns={2} spacing={5}>
            <GridItem maxW="max-content">
              <a href="https://facebook.com/scholarlyng" target="blank">
                <Box p={9} fontSize={0} borderRadius={4} bg="rgba(255, 255, 255, 0.2)">
                  <Image src="/facebook.svg" width={80} height={80} alt="Facebook Icon" />
                </Box>
              </a>
            </GridItem>
            <GridItem maxW="max-content">
              <a href="https://twitter.com/scholarlyng" target="blank">
                <Box p={9} fontSize={0} borderRadius={4} bg="rgba(255, 255, 255, 0.2)">
                  <Image src="/twitter.svg" width={80} height={80} alt="Twitter Icon" />
                </Box>
              </a>
            </GridItem>
            <GridItem maxW="max-content">
              <a href="https://www.linkedin.com/company/scholarlyafrica/" target="blank">
                <Box p={9} fontSize={0} borderRadius={4} bg="rgba(255, 255, 255, 0.2)">
                  <Image src="/linkedin.svg" width={80} height={80} alt="Linkedin Icon" />
                </Box>
              </a>
            </GridItem>
            <GridItem maxW="max-content">
              <a href="https://wa.me/+2349061701939" target="blank">
                <Box p={9} fontSize={0} borderRadius={4} bg="rgba(255, 255, 255, 0.2)">
                  <Image src="/whatsapp.svg" width={80} height={80} alt="WhatsApp Icon" />
                </Box>
              </a>
            </GridItem>
          </SimpleGrid>
        </Flex>
      </Box>
    </Page>
  )
}

export default ContactUs;