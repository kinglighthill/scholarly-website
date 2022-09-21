import Image from 'next/image';
import Link from 'next/link';
import type { NextPage } from 'next';
import { Box, Flex, GridItem, HStack, Icon, Link as ChakraLink, SimpleGrid, Spacer, Text, VStack } from "@chakra-ui/react";
import Page from "../components/reusables/Page";
import { PhoneIcon, MailIcon } from '@heroicons/react/solid';
import whatsapp from '../public/whatsapp.svg';

const ContactUs: NextPage = () => {
  return (
    <Page title="Contact Us | Scholarly" description="Email: info@scholarly.africa, Phone: +2348136941462, WhatsApp: +2348136941462">
      <Box as="section" px={[5, "10%", 10, "13%"]} pt={{base: 14, md: 28}} pb={28} bg="brand.lime.700" borderBottom="1px solid" borderColor="brand.yellow">
        <Text as="h1" color="brand.yellow" mb={["18px", 9]} lineHeight="120%" fontSize={[31, 39]} fontWeight="bold">Contact Us</Text>
        <Flex wrap={{base: "wrap", md: "nowrap"}} align="start">
          <VStack spacing="26px" align="start" flexBasis={{base: "100%", md: "45%"}} mb={{base: "70px", md: 16}}>
            <Text color="white" fontSize={20}>Have an enquiry or complaints? Reach out to us via any of the channels and we&apos;ll respond promptly</Text>
            <VStack spacing={2} align="start">
              <Text color="brand.yellow" fontWeight={500}>Call Us</Text>
              <HStack spacing={3.5} color='white' fontSize={{base: 18, md: 25, lg: 31}} fontWeight={500}>
                <Icon as={PhoneIcon} />
                <Link href='tel:+2348136941462' passHref>
                  <ChakraLink>08136941462</ChakraLink>
                </Link>
              </HStack>
            </VStack>
            <VStack spacing={2} align="start">
              <Text color="brand.yellow" fontWeight={500}>WhatsApp</Text>
              <HStack spacing={3.5} color='white' fontSize={{base: 18, md: 25, lg: 31}} fontWeight={500}>
                <Box fontSize={0} maxW={{base: "25px", md: "100%"}}>
                  <Image src={whatsapp} alt="WhatsApp Icon" />
                </Box>
                <Link href='https://wa.me/+2348136941462' passHref>
                  <ChakraLink isExternal>08136941462</ChakraLink>
                </Link>
              </HStack>
            </VStack>
            <VStack spacing={2} align="start">
              <Text color="brand.yellow" fontWeight={500}>WhatsApp</Text>
              <HStack spacing={3.5} color='white' fontSize={{base: 18, md: 25, lg: 31}} fontWeight={500}>
                <Icon as={MailIcon} />
                <Link href='mailto:info@scholarly.africa' passHref>
                  <ChakraLink>info@scholarly.africa</ChakraLink>
                </Link>
              </HStack>
            </VStack>
          </VStack>
          
          <Spacer />

          <SimpleGrid w={["full", "initial"]} columns={[4, 2]} spacing={5}>
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