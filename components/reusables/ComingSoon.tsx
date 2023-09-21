import Image from "next/image";
import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, Spacer, Text, VStack } from "@chakra-ui/react";
import coming_soon from "../../public/coming_soon.svg";
import useFeatureNotifier from "../../hooks/useFeatureNotifier";

export default function ComingSoon({ feature }: {feature: string}) {
  const { email, emailError, loading, handleChange, handleSubmit } = useFeatureNotifier(feature);

  return (
    <Box as="section" py={24} px={[5, 12, 7, 14, 24]} flex='1'>
      <Flex alignItems="center" justify={{base: "center"}} flexWrap={{base: "wrap", md: "nowrap"}} className='responsive_1440px'>
        <Box fontSize={0} flexBasis={["100%", "70%", "48%"]} mb={{base: 14, md: 0}}>
          <Image src={coming_soon} alt="" priority />
        </Box>
        <Spacer display={{base: "none", md: "block"}} />
        <VStack spacing={6} align="start" flexBasis={{base: "100%", md: "50%", lg: "48%", xl: "45%"}}>
          <Text color="brand.lime.700" w="full" textAlign={{base: "center", md: "left"}} lineHeight="144%" fontSize={{base: 32, md: 49}} fontWeight="bold">Coming Soon!!!</Text>
          <Text color="brand.lime.700" fontSize={13}>Our team is working hard to develop this product. Kindly provide your email so we&apos;ll inform you when we launch.</Text>
          <Text color="brand.lime.500" fontWeight="medium">Be the first to know when we launch</Text>
          <form aria-label="Join the waitlist" onSubmit={handleSubmit} style={{width: "100%"}}>
            <FormControl mb={6} isRequired isInvalid={emailError}>
              <FormLabel htmlFor="email" mb={2} fontSize={13} fontWeight="medium">Email</FormLabel>
              <Input id="email" type="email" name="email" value={email} placeholder="Enter your email" fontSize={13}
                borderColor="rgba(0,0,0,0.42)" focusBorderColor="brand.lime.500" onChange={handleChange}
                _hover={{borderColor: "rgba(0,0,0,0.87)"}}
              />
              <FormErrorMessage>Email is invalid.</FormErrorMessage>
            </FormControl>
            <Button type="submit" variant="solid" isLoading={loading}>Join waitlist</Button>
          </form>
        </VStack>
      </Flex>
    </Box>
  )
}
