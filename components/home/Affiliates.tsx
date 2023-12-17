import Image from "next/image";
import { Box, Flex, HStack, Icon, Spacer, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import classes from "../../styles/Home.module.css";
import sign_up2 from "../../public/sign_up2.svg";
import topup_wallet2 from "../../public/topup_wallet2.svg";
import find_customers2 from "../../public/find_customers2.svg";
import spiral from "../../public/spiral.svg";
import scholarly_affiliates_demo from "../../public/scholarly_affiliates_demo.webp";
import AffiliateSignup from "../reusables/AffiliateSignup";
import CustomLink from "../reusables/CustomLink";
import GooglePlayDownloadBadge from "../reusables/GooglePlayDownloadBadge";

export default function Affiliates() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="section" bgColor='brand.nearWhite' pos='relative' className={classes.affiliates_section}>
      <Flex wrap={{base: 'wrap', md: 'nowrap'}} flexDir={{base: 'column-reverse', md: 'row'}} align={{md: 'center'}} className='responsive_1440px'>
        <Box flexBasis={{base: "100%", md: "40%"}}>
          <VStack display={{base: "none", md: "flex"}} spacing={2} align='start' color='brand.lime.700' mb={9}>
            <Text as='h2' fontSize={39} fontWeight='bold'>For Affiliates</Text>
            <Text fontSize={20}>Resell Scholarly Apps. Earn profit!</Text>
          </VStack>
          <VStack spacing={[8, 12, '52px']} align='start' mb={{base: "50px", md: "77px"}}>
            <HStack spacing={{base: 0, md: 9}} align="start" wrap={{base: 'wrap', md: 'nowrap'}}>
              <Box fontSize={0} borderRadius='50%' p={["18px", "22px"]} mb={{base: 4, md: 0}} maxW='19%' backgroundColor="rgba(248, 195, 67, 0.2)">
                <Image src={sign_up2} alt="" width={"30%"} height={"30%"} />
              </Box>
              <Box flexBasis={{base: '100%', md: 'initial'}}>
                <Text fontSize={20} fontWeight="bold" color="brand.lime.700">Sign up</Text>
                <Text mt={2} color="brand.lime.700" mb={5}>Download the app to create an account.</Text>
                {/* <GooglePlayDownloadBadge download_link="https://play.google.com/store/apps/details?id=com.scholarly.affiliate" width={120} height={35} /> */}
                <GooglePlayDownloadBadge download_link="/api/download?fileName=partners-app/scholarly-affiliate&platform=android&is_partners_app=true" width={177} height={52} />
                {/* <Button type="button" variant="solid" mt={{base: 5, md: 7}} onClick={onOpen} iconSpacing={5} rightIcon={<Icon as={ChevronRightIcon} mt={0.5} />}>
                  Sign up
                </Button> */}
              </Box>
            </HStack>
            <HStack spacing={{base: 0, md: 9}} align="start" wrap={{base: 'wrap', md: 'nowrap'}}>
              <Box fontSize={0} borderRadius='50%' px={["18px", "22px"]} py={["16.5px", "20.5px"]} mb={{base: 4, md: 0}} maxW='19%' backgroundColor="rgba(226, 96, 221, 0.16)">
                <Image src={topup_wallet2} alt="" />
              </Box>
              <Box flexBasis={{base: '100%', md: 'initial'}}>
                <Text fontSize={20} fontWeight="bold" color="brand.lime.700">Buy activation pins</Text>
                <Text mt={2} color="brand.lime.700">Buy activation pins from over 30 Scholarly apps at discounted rates.</Text>
              </Box>
            </HStack>
            <HStack spacing={{base: 0, md: 9}} align="start" wrap={{base: 'wrap', md: 'nowrap'}}>
              <Box fontSize={0} borderRadius='49%' py={['22px', 6]} px={['18px', "22px"]} mb={{base: 4, md: 0}} maxW='19%' backgroundColor="rgba(0, 197, 255, 0.2)">
                <Image src={find_customers2} alt="" />
              </Box>
              <Box flexBasis={{base: '100%', md: 'initial'}}>
                <Text fontSize={20} fontWeight="bold" color="brand.lime.700">Resell to customers</Text>
                <Text mt={2} color="brand.lime.700">Resell activation pins to customers around you and earn commission.</Text>
              </Box>
            </HStack>
          </VStack>
          <HStack spacing={{base: 5, md: "50px"}} justify={{base: 'center', md: 'initial'}}>
            <CustomLink href='/affiliates' prefetch={false} type="button" variant="outline" iconSpacing={{md: 5}} rightIcon={<Icon as={ChevronRightIcon} display={{base: 'none', md: 'inline-block'}} />}>
              Learn More
            </CustomLink>
            {/* <CustomLink href='/apps/android' prefetch={false} type="button" variant="solid" iconSpacing={{md: 5}} rightIcon={<Icon as={ChevronRightIcon} display={{base: 'none', md: 'inline-block'}} />}>
              Download App
            </CustomLink> */}
          </HStack>
        </Box>

        <Spacer />

        <Box flexBasis={{base: "100%", md: "42%"}} mb={{base: '60px', md: 0}} zIndex={1}>
          <VStack display={{base: "flex", md: "none"}} spacing={4} align='start' color='brand.lime.700' mb={8}>
            <Text as='h2' fontSize={[25, 31]} fontWeight='bold'>For Affiliates</Text>
            <Text>Resell Scholarly Apps. Earn profit!</Text>
          </VStack>
          <Box maxW={{base: '50%', md: '75%'}} m="auto">
            <Image src={scholarly_affiliates_demo} alt="Demo of the Scholarly Affiliates App" />
          </Box>
        </Box>
      </Flex>
      <Box maxW={['270px', '300px', '350px', '100%']} pos="absolute" bottom={['51.5%', '45%', '7%', '-15%']} left={{base: "45%", md: "68%", lg: "44.7%", xl: '46%'}} zIndex={0}>
        <Image src={spiral} alt="" />
      </Box>

      <AffiliateSignup isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}
