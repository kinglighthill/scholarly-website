import { Box, Button, FormControl, FormLabel, Input, Text, VStack } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "../../components/reusables/Footer";
import Navbar from "../../components/reusables/Navbar";

export default function Business() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log((e.target as HTMLFormElement).value);
  }

  return (
    <div>
      <Head>
        <title>Scholarly Africa | Business</title>
      </Head>
      <Navbar />

      <Box as="section" bg="white" pt={7} pb={16} px={5} textAlign="center">
        <VStack spacing={10} w="full">
          <Text color="brand.yellow" lineHeight="120%" fontSize={61} fontWeight="medium">Coming Soon...</Text>
          <VStack spacing={8}>
            <Text color="brand.lime.500" fontSize={20} fontWeight="medium">Be the first to Know when we launch</Text>
            <Text color="brand.lime.700" fontSize={13}>Our team is working hard to develop this product. Kindly provide your email so we&apos;ll inform you when we launch.</Text>
          </VStack>
          <form aria-label="Join the waitlist" onSubmit={handleSubmit} style={{width: "100%"}}>
            <FormControl mb={6}>
              <FormLabel htmlFor="email" mb={2} textAlign="center" fontSize={13} fontWeight="medium">Email</FormLabel>
              <Input type="email" id="email" name="email" placeholder="Enter your email" maxW="272px" fontSize={13} focusBorderColor="brand.lime.500" />
            </FormControl>
            <Button type="submit" variant="solid">Join waitlist</Button>
          </form>
        </VStack>
      </Box>

      <Footer />
    </div>
  )
}
