import { Box, Button, Flex, FormControl, FormLabel, Input, Spacer, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import coming_soon from "../../public/coming_soon.svg";

export default function ComingSoon() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log((e.target as HTMLFormElement).email.value);
  }

  return (
    <Box as="section" py={24} px={[5, 12, 7, 14, 24]}>
      <Flex alignItems="center" justify={{base: "center"}} flexWrap={{base: "wrap", md: "nowrap"}}>
        <Box fontSize={0} flexBasis={["100%", "70%", "48%"]} mb={{base: 14, md: 0}}>
          <Image src={coming_soon} alt="" priority />
        </Box>
        <Spacer display={{base: "none", md: "block"}} />
        <VStack spacing={6} align="start" flexBasis={{base: "100%", md: "50%", lg: "48%", xl: "45%"}}>
          <Text color="brand.lime.700" w="full" textAlign={{base: "center", md: "left"}} lineHeight="144%" fontSize={{base: 32, md: 49}} fontWeight="bold">Coming Soon!!!</Text>
          <Text color="brand.lime.700" fontSize={13}>Our team is working hard to develop this product. Kindly provide your email so we&apos;ll inform you when we launch.</Text>
          <Text color="brand.lime.500" fontWeight="medium">Be the first to know when we launch</Text>
          <form aria-label="Join the waitlist" onSubmit={handleSubmit} style={{width: "100%"}}>
            <FormControl mb={6}>
              <FormLabel htmlFor="email" mb={2} fontSize={13} fontWeight="medium">Email</FormLabel>
              <Input type="email" id="email" name="email" placeholder="Enter your email" fontSize={13} focusBorderColor="brand.lime.500" />
            </FormControl>
            <Button type="submit" variant="solid">Join waitlist</Button>
          </form>
        </VStack>
      </Flex>
    </Box>
  )
}
