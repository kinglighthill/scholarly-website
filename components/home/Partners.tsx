import { Box, Button, Flex, HStack, Icon, Spacer, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/outline";
import classes from "../../styles/Home.module.css";
import sign_up2 from "../../public/sign_up2.svg";
import verify_identity2 from "../../public/verify_identity2.svg";
import find_customers2 from "../../public/find_customers2.svg";
import spiral from "../../public/spiral.svg";
import scholarly_partners_demo from "../../public/scholarly_partners_demo.png";

export default function Partners() {
  return (
    <Box as="section" bgColor='brand.nearWhite' pos='relative' className={classes.partners_section}>
      <Flex>
        <Box flexBasis="40%">
          <VStack spacing={2} align='start' color='brand.lime.700' mb={9}>
            <Text as='h2' fontSize={39} fontWeight='bold'>For Partners</Text>
            <Text fontSize={20}>Resell Scholarly Apps. Earn profit!</Text>
          </VStack>
          <VStack spacing='52px' align='start' mb="77px">
            <HStack spacing={9} align="start">
              <Box borderRadius={400} p={6} maxW='19%' backgroundColor="rgba(248, 195, 67, 0.2)">
                <Image src={sign_up2} alt="" />
              </Box>
              <Box>
                <Text fontSize={20} fontWeight="bold" color="brand.lime.700">Sign up</Text>
                <Text mt={2} color="brand.lime.700">Create an account as a Scholarly partner.</Text>
                <Button type="button" variant="solid" mt={7}>
                  Sign up
                  <Icon as={ChevronRightIcon} ml={5} />
                </Button>
              </Box>
            </HStack>
            <HStack spacing={9} align="start">
              <Box borderRadius={400} p={6} maxW='19%' backgroundColor="rgba(70, 172, 102, 0.2)">
                <Image src={verify_identity2} alt="" />
              </Box>
              <Box>
                <Text fontSize={20} fontWeight="bold" color="brand.lime.700">Buy activation pins</Text>
                <Text mt={2} color="brand.lime.700">Buy activation pins from over 30 Scholarly apps at discounted rates.</Text>
              </Box>
            </HStack>
            <HStack spacing={9} align="start">
              <Box borderRadius={300} p={6} maxW='19%' backgroundColor="rgba(0, 197, 255, 0.2)">
                <Image src={find_customers2} alt="" />
              </Box>
              <Box>
                <Text fontSize={20} fontWeight="bold" color="brand.lime.700">Resell to customers</Text>
                <Text mt={2} color="brand.lime.700">Resell activation pins to customers around you and earn up to 100% profit.</Text>
              </Box>
            </HStack>
          </VStack>
          <HStack spacing="50px">
            <Button type="button" variant="outline">
              Learn More
              <Icon as={ChevronRightIcon} ml={5} />
            </Button>
            <Button type="button" variant="solid">
              Download App
              <Icon as={ChevronRightIcon} ml={5} />
            </Button>
          </HStack>
        </Box>

        <Spacer />

        <Box flexBasis="42%" zIndex={1}>
          <Image src={scholarly_partners_demo} alt="Demo of the Scholarly Partners App" />
        </Box>
      </Flex>

      <Box pos="absolute" bottom={-1.5} left="44%" zIndex={0}>
        <Image src={spiral} alt="" />
      </Box>
    </Box>
  )
}
