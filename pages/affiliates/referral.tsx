import type { NextPage } from 'next';
import { Box, Button, Flex, Icon, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { DownloadIcon } from "@heroicons/react/solid";
import ReferralStepCard from "../../components/affiliates/ReferralStepCard";
import AffiliateSignup from "../../components/reusables/AffiliateSignup";
import Page from "../../components/reusables/Page";

const AffiliatesReferral: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Page title="Refer An Affiliate and Earn Extra Income" description="Increase your revenue as an affiliate with our Affiliates Referral program. Earn monetary commission each time your referral makes a sale"
      keywords={[
        'referral commissions', 'refer to earn', 'increase your revenue', 'earn extra income', 'leads', 'customers', 'funnel',
        'register as an affiliate', 'become an affiliate', 'resell activation pins', 'reward systems'
      ]}
    >
      <Box as="section" px={[5, 7, "10%"]} pt={14} pb={24} bgColor="brand.lime.700" borderBottom="1px solid" borderColor="brand.yellow">
        <Stack direction="row" spacing={[3.5, 5, 20]} w="full" pl={[3.5, 5, 10]} py="18px" mb={12} borderRadius={10} bg="rgba(255, 255, 255, 0.1)" className='responsive_1440px'>
          <Stack direction="column" spacing={1.5} maxW={{lg: "60%"}}>
            <Text as="h1" color="brand.yellow" fontSize={25} fontWeight="bold">Refer Affiliates and Earn Commission</Text>
            <Text color="white">Each time your referral make a sale, you earn monetary commission loaded to your referral wallet.</Text>
          </Stack>
          <Box>
            <Text bg="brand.yellow" color="white" p={3.5} mt="-18px" fontSize={49} fontWeight="medium" borderRadius={{base: "0px 10px 0px 10px", lg: "0px 0px 10px 10px"}}>
              10%
            </Text>
          </Box>
        </Stack>

        <Flex flexDir="column" align="center" className='responsive_1440px'>
          <Text as="h2" color="white" fontSize={31} fontWeight="bold" mb={7}>Steps</Text>
          <Stack direction={["column", "row"]} w="full" justify="space-between" mb={12}>
            <ReferralStepCard index={1} title="Sign Up" description="Download the app and create an account." />
            <ReferralStepCard index={2} title="Share your Referral Code" description="Tell your friends about the app and help sign them up with your referral code." />
            <ReferralStepCard index={3} title="Earn" description="When your friend makes a sale, your referral wallet gets credited instantly." />
          </Stack>
          <Stack direction="row" spacing={6}>
            <Button type="button" disabled variant="solid" onClick={onOpen} iconSpacing={{md: 4}} rightIcon={<Icon as={ChevronRightIcon} display={["none", "inline-block"]}/>}>
              Sign up
            </Button>
            <Button type="button" disabled variant="solid" color="brand.lime.500" bg="white" _hover={{bg: "gray.200"}} iconSpacing={{md: 4}} rightIcon={<Icon as={DownloadIcon} display={["none", "inline-block"]}/>}>
              Download App
            </Button>
          </Stack>
        </Flex>
      </Box>
      
      <AffiliateSignup isOpen={isOpen} onClose={onClose} />
    </Page>
  )
}

export default AffiliatesReferral;