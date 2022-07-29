import { Box, Button, Flex, Icon, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { DownloadIcon } from "@heroicons/react/solid";
import Head from "next/head";
import ReferralStepCard from "../../components/partners/ReferralStepCard";
import Footer from "../../components/reusables/Footer";
import Navbar from "../../components/reusables/Navbar";
import PartnerSignup from "../../components/reusables/PartnerSignup";

export default function PartnersReferral() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Head>
        <title>Scholarly Africa | Partners Referral Program</title>
      </Head>
      <Navbar />

      <main>
        <Box as="section" px={[5, 7, "10%"]} pt={14} pb={24} bgColor="brand.lime.700" borderBottom="1px solid" borderColor="brand.yellow">
          <Stack direction="row" spacing={[3.5, 5, 20]} w="full" pl={[3.5, 5, 10]} py="18px" mb={12} borderRadius={10} bg="rgba(255, 255, 255, 0.1)">
            <Stack direction="column" spacing={1.5} maxW={{lg: "60%"}}>
              <Text as="h1" color="brand.yellow" fontSize={25} fontWeight="bold">Refer Partners and Earn Commission</Text>
              <Text color="white">Each time your referral make a sale, you earn monetary commission loaded to your referral wallet.</Text>
            </Stack>
            <Box>
              <Text bg="brand.yellow" color="white" p={3.5} mt="-18px" fontSize={49} fontWeight="medium" borderRadius={{base: "0px 10px 0px 10px", lg: "0px 0px 10px 10px"}}>
                10%
              </Text>
            </Box>
          </Stack>

          <Flex flexDir="column" align="center">
            <Text as="h2" color="white" fontSize={31} fontWeight="bold" mb={7}>Steps</Text>
            <Stack direction={["column", "row"]} w="full" justify="space-between" mb={12}>
              <ReferralStepCard index={1} title="Sign Up" description="Create an account here or download app and create account with app." />
              <ReferralStepCard index={2} title="Share your Referral Code" description="Tell your friends about the app and help sign them up with your referral code." />
              <ReferralStepCard index={3} title="Earn" description="When your friend make a sale, your referral wallet gets credited instantly." />
            </Stack>
            <Stack direction="row" spacing={6}>
              <Button type="button" variant="solid" onClick={onOpen}>
                Sign up
                <Icon as={ChevronRightIcon} ml={4} display={["none", "inline-block"]}/>
              </Button>
              <Button type="button" variant="solid" color="brand.lime.500" bg="white" _hover={{bg: "gray.200"}}>
                Download App
                <Icon as={DownloadIcon} ml={4} display={["none", "inline-block"]}/>
              </Button>
            </Stack>
          </Flex>
        </Box>
        
        <PartnerSignup isOpen={isOpen} onClose={onClose} />
      </main>

      <Footer />
    </div>
  )
}
