import Image from "next/image";
import { Box, Flex, Spacer, Stack, Text, VStack } from "@chakra-ui/react";
import young_male_with_khaki_shirt from "../../public/young_male_with_khaki_shirt.webp";
import scholarly_students_demo2 from "../../public/scholarly_students_demo2.webp";
import jamb_cbt_practice from "../../public/jamb_cbt_practice.webp";
import jamb_logo from "../../public/jamb_logo.svg";
import appstore from "../../public/appstore.svg";
import playstore from "../../public/playstore.svg";
import windows from "../../public/windows.svg";
import DownloadCard from "./DownloadCard";
import Testimonials from "../reusables/Testimonials";

export default function App() {
  return (
    <Box>
      {/* Banner Section */}
      <Box as="section" bg="#F8C343" pt={7} px={{base: 14, md: 16, lg: 32}}>
        <Flex>
          <Box fontSize={0} flexBasis="23%" display={{base: "none", md: "block"}}>
            <Image src={young_male_with_khaki_shirt} alt="A young male wearing a khaki shirt" />
          </Box>
          <Spacer />
          <Box fontSize={0} flexBasis={{base: "100%", md: "53%"}} pos="relative">
            <Image src={scholarly_students_demo2} alt="Scholarly Students App Demo" />
            <Box maxW={{md: "75px", lg: "100%"}} pos="absolute" bottom="-35px" right="-10px" display={{base: "none", md: "block"}}>
              <Image src={jamb_logo} alt="JAMB Logo" width={95} height={90} />
            </Box>
          </Box>
        </Flex>
      </Box>

      {/* App Details */}
      <Box as="section" py="50px" px={[5, 12, 12, "120px"]}>
        <Stack direction="row" spacing={{base: 0, md: 10}} justify="center">
          <Box display={{base: "none", md: "block"}}>
            <Image src={jamb_cbt_practice} alt="" width={100} height={100} style={{boxShadow: "0px 2.90312px 33px 8px rgba(0, 0, 0, 0.08)"}} />
          </Box>
          <VStack spacing={4} align="start">
            <Text as="h1" color="brand.lime.700" lineHeight="120%" fontSize={[20, 32]} fontWeight="bold">JAMB CBT Practice Past Questions and Answers</Text>
            <Text color="brand.lime.700" lineHeight="120%" fontSize={14} fontWeight="medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec lorem sollicitudin vitae faucibus in in purus nisl, est. Non arcu faucibus maecenas sit.</Text>
          </VStack>
        </Stack>
      </Box>

      {/* Download Section */}
      <Box as="section" py={8} px={[5, 12, 12, "120px"]} bg={{md: "linear-gradient(to bottom, white 50%, #FEF8E8 50%)"}}>
        <Stack direction={{base: "column", md: "row"}} spacing={6} justify="center">
          <DownloadCard storeIcon={playstore} storeName="PlayStore" appRating={5} />
          <DownloadCard storeIcon={appstore} storeName="Appstore" appRating={5} />
          <DownloadCard storeIcon={windows} storeName="Microsoft Store" appRating={5} />
        </Stack>
      </Box>

      {/* Testimonials Section */}
      <Box as='section' bg='brand.nearWhite' pt={{base: '60px', md: '82px'}} pb={{base: '60px', md: '115px'}}>
        <Box textAlign='center' mb={{base: '90px', md: 12}} px={{base: 5, md: 0}}>
          <Text display='inline-block' textAlign='center' px='42px' py='10px' borderRadius={4} bgColor='brand.lime.700' color='brand.nearWhite' fontSize={[20, 31]} fontWeight='medium'>
            What people are saying
          </Text>
        </Box>
        <Testimonials />
        </Box>
    </Box>
  )
}
