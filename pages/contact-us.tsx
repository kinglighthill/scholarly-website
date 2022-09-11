import Image from 'next/image';
import type { NextPage } from 'next';
import { Box, Flex, GridItem, SimpleGrid, Spacer, Text, VStack } from "@chakra-ui/react";
import Page from "../components/reusables/Page";
import ContactForm from '../components/reusables/ContactForm';

const ContactUs: NextPage = () => {
  return (
    <Page title="Contact Us | Scholarly" description="Email: info@scholarly.africa, Phone: +2348136941462, WhatsApp: +2348136941462">
      <Box as="section" px={[5, "10%", 10, 10, "10%"]} pt={{base: 14, md: 28}} pb={28} bg="brand.lime.700" borderBottom="1px solid" borderColor="brand.yellow">
        <Flex wrap={{base: "wrap", md: "nowrap"}} align="center">
          <VStack spacing={["18px", 9]} align="start" mb={{base: "70px", md: 0}} flexBasis={{base: "100%", md: "45%"}}>
            <Text as="h1" color="brand.yellow" lineHeight="120%" fontSize={[31, 39]} fontWeight="bold">Contact Us</Text>
            <Text color="white" fontSize={20}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non pellentesque faucibus sed in nunc</Text>
            {/* <Box w="full">
              <ContactForm textColor='white' />
            </Box> */}
          </VStack>
          
          <Spacer />

          <SimpleGrid w={["full", "initial"]} columns={[4, 2]} spacing={5} >
            <GridItem colSpan={4} mb="1.5" display={["block", "none"]}>
              <Text color="white" fontSize={13} textAlign="center">Or reach us via our Social Media</Text>
            </GridItem>
            <GridItem maxW="max-content" justifySelf={["center", "initial"]}>
              <a href="https://facebook.com/scholarlyng" target="_blank" rel="noreferrer">
                <Box p={[0, 9]} maxW={["45px", "100%"]} fontSize={0} borderRadius={4} bg={["none", "rgba(255, 255, 255, 0.2)"]}>
                  <Image src="/facebook.svg" width={80} height={80} alt="Facebook Icon" priority />
                </Box>
              </a>
            </GridItem>
            <GridItem maxW="max-content" justifySelf={["center", "initial"]} rowSpan={1}>
              <a href="https://twitter.com/scholarlyng" target="_blank" rel="noreferrer">
                <Box p={[0, 9]} maxW={["45px", "100%"]} fontSize={0} borderRadius={4} bg={["none", "rgba(255, 255, 255, 0.2)"]}>
                  <Image src="/twitter.svg" width={80} height={80} alt="Twitter Icon" priority />
                </Box>
              </a>
            </GridItem>
            <GridItem maxW="max-content" justifySelf={["center", "initial"]}>
              <a href="https://www.instagram.com/scholarlyng/" target="_blank" rel="noreferrer">
                <Box p={[0, 9]} maxW={["45px", "100%"]} fontSize={0} borderRadius={4} bg={["none", "rgba(255, 255, 255, 0.2)"]}>
                  <Image src="/instagram.svg" width={80} height={80} alt="Instagram Icon" priority />
                </Box>
              </a>
            </GridItem>
            <GridItem maxW="max-content" justifySelf={["center", "initial"]}>
              <a href="https://www.linkedin.com/company/scholarlyafrica/" target="_blank" rel="noreferrer">
                <Box p={[0, 9]} maxW={["45px", "100%"]} fontSize={0} borderRadius={4} bg={["none", "rgba(255, 255, 255, 0.2)"]}>
                  <Image src="/linkedin.svg" width={80} height={80} alt="Linkedin Icon" priority />
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