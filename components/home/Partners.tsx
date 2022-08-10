import Image from "next/image";
import Link from "next/link";
import { Box, Button, Flex, HStack, Icon, Spacer, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import classes from "../../styles/Home.module.css";
import sign_up2 from "../../public/sign_up2.svg";
import verify_identity2 from "../../public/verify_identity2.svg";
import find_customers2 from "../../public/find_customers2.svg";
import spiral from "../../public/spiral.svg";
import scholarly_partners_demo from "../../public/scholarly_partners_demo.png";
import PartnerSignup from "../reusables/PartnerSignup";

export default function Partners() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="section" bgColor='brand.nearWhite' pos='relative' className={classes.partners_section}>
      <Flex wrap={{base: 'wrap', md: 'nowrap'}} flexDir={{base: 'column-reverse', md: 'row'}} align={{md: 'center'}}>
        <Box flexBasis={{base: "100%", md: "40%"}}>
          <VStack display={{base: "none", md: "flex"}} spacing={2} align='start' color='brand.lime.700' mb={9}>
            <Text as='h2' fontSize={39} fontWeight='bold'>For Partners</Text>
            <Text fontSize={20}>Resell Scholarly Apps. Earn profit!</Text>
          </VStack>
          <VStack spacing={[8, 12, '52px']} align='start' mb={{base: "50px", md: "77px"}}>
            <HStack spacing={{base: 0, md: 9}} align="start" wrap={{base: 'wrap', md: 'nowrap'}}>
              <Box fontSize={0} borderRadius='50%' p={['18px', 6]} mb={{base: 4, md: 0}} maxW='19%' backgroundColor="rgba(248, 195, 67, 0.2)">
                <Image src={sign_up2} alt="" />
              </Box>
              <Box flexBasis={{base: '100%', md: 'initial'}}>
                <Text fontSize={20} fontWeight="bold" color="brand.lime.700">Sign up</Text>
                <Text mt={2} color="brand.lime.700">Create an account as a Scholarly partner.</Text>
                <Button type="button" variant="solid" mt={{base: 5, md: 7}} onClick={onOpen} iconSpacing={5} rightIcon={<Icon as={ChevronRightIcon} mt={0.5} />}>
                  Sign up
                </Button>
              </Box>
            </HStack>
            <HStack spacing={{base: 0, md: 9}} align="start" wrap={{base: 'wrap', md: 'nowrap'}}>
              <Box fontSize={0} borderRadius='50%' p={['18px', 6]} mb={{base: 4, md: 0}} maxW='19%' backgroundColor="rgba(70, 172, 102, 0.2)">
                <Image src={verify_identity2} alt="" />
              </Box>
              <Box flexBasis={{base: '100%', md: 'initial'}}>
                <Text fontSize={20} fontWeight="bold" color="brand.lime.700">Buy activation pins</Text>
                <Text mt={2} color="brand.lime.700">Buy activation pins from over 30 Scholarly apps at discounted rates.</Text>
              </Box>
            </HStack>
            <HStack spacing={{base: 0, md: 9}} align="start" wrap={{base: 'wrap', md: 'nowrap'}}>
              <Box fontSize={0} borderRadius='50%' p={['18px', 6]} mb={{base: 4, md: 0}} maxW='19%' backgroundColor="rgba(0, 197, 255, 0.2)">
                <Image src={find_customers2} alt="" />
              </Box>
              <Box flexBasis={{base: '100%', md: 'initial'}}>
                <Text fontSize={20} fontWeight="bold" color="brand.lime.700">Resell to customers</Text>
                <Text mt={2} color="brand.lime.700">Resell activation pins to customers around you and earn up to 100% profit.</Text>
              </Box>
            </HStack>
          </VStack>
          <HStack spacing={{base: 5, md: "50px"}} justify={{base: 'center', md: 'initial'}}>
            <Link href='/partners'>
              <a>
                <Button type="button" variant="outline" iconSpacing={{md: 5}} rightIcon={<Icon as={ChevronRightIcon} display={{base: 'none', md: 'inline-block'}} />}>
                  Learn More
                </Button>
              </a>
            </Link>
            <Button type="button" variant="solid" iconSpacing={{md: 5}} rightIcon={<Icon as={ChevronRightIcon} display={{base: 'none', md: 'inline-block'}} />}>
              Download App
            </Button>
          </HStack>
        </Box>

        <Spacer />

        <Box flexBasis={{base: "100%", md: "42%"}} mb={{base: '60px', md: 0}} zIndex={1}>
          <VStack display={{base: "flex", md: "none"}} spacing={4} align='start' color='brand.lime.700' mb={8}>
            <Text as='h2' fontSize={31} fontWeight='bold'>For Partners</Text>
            <Text fontSize={16}>Resell Scholarly Apps. Earn profit!</Text>
          </VStack>
          <Box maxW={{base: '70%', md: '100%'}} m={{base: "auto", md: 0}}>
            <Image src={scholarly_partners_demo} alt="Demo of the Scholarly Partners App" />
          </Box>
        </Box>
      </Flex>

      <Box pos="absolute" bottom={['51.5%', '45%', '8%', 2, -8]} left={{base: "39%", md: "55%", lg: "53%"}} zIndex={0}>
        <Image src={spiral} alt="" />
      </Box>

      <PartnerSignup isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}
